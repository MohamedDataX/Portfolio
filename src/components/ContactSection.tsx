import { useState } from 'react';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Section, SectionHeading } from '@/components/shared/Section';
import Reveal from '@/components/shared/Reveal';
import { socials, WEB3FORMS_KEY } from '@/data/portfolio';

const contactLinks = [
  { icon: Mail, label: 'Email', value: socials.email, href: `mailto:${socials.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/mohamed-ash', href: socials.linkedin },
  { icon: Github, label: 'GitHub', value: '@MohamedDataX', href: socials.github },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [botcheck, setBotcheck] = useState(''); // honeypot — must stay empty
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const web3formsEnabled =
    Boolean(WEB3FORMS_KEY) && WEB3FORMS_KEY !== 'YOUR_ACCESS_KEY';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // mailto fallback (used until a Web3Forms key is configured).
  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n· ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    toast({
      title: 'Opening your mail app',
      description: `If nothing opens, email me at ${socials.email}.`,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botcheck) return; // bot filled the honeypot — silently drop
    setIsSubmitting(true);

    if (!web3formsEnabled) {
      sendViaMailto();
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio message from ${formData.name}`,
          from_name: 'Portfolio contact form',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: 'Message sent',
          description:
            'Thank you for your message! I’ll get back to you as soon as possible, usually within 24 hours.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Request failed');
      }
    } catch {
      toast({
        title: 'Could not send',
        description: `Please email me directly at ${socials.email}.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let’s talk"
        description="Have a project, a role, or a question about data & AI? Drop me a message."
        align="center"
      />

      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-3">
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">{label}</span>
                <span className="block truncate text-sm text-muted-foreground">{value}</span>
              </span>
            </a>
          ))}

          <div className="rounded-xl border border-border bg-card p-4">
            <p className="text-sm font-medium text-foreground">Availability</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Open to new opportunities and collaborations. Typical response time: Under 24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6"
          >
            {/* Honeypot — hidden from humans, trips up bots */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              checked={Boolean(botcheck)}
              onChange={(e) => setBotcheck(e.target.checked ? '1' : '')}
              className="hidden"
              aria-hidden="true"
            />
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or question…"
                className="resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default ContactSection;
