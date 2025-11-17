import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { useTheme } from '../context/ThemeContext.tsx'
import CosmicBackground from '@/components/theme/CosmicBackground'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { isDarkMode } = useTheme()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I’ll get back to you as soon as possible."
    })

    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aitsidihoum@gmail.com",
      href: "mailto:aitsidihoum@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/mohamed-ash/",
      href: "https://www.linkedin.com/in/mohamed-ash/",
      color: "text-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@mohamedASH404",
      href: "https://github.com/mohamedASH404",
      color: "text-gray-700"
    }
  ]

  return (
    <section
      id="contact"
      className={`py-20 relative overflow-hidden theme-transition ${
        isDarkMode ? 'theme-bg-dark' : 'theme-bg-light'
      } font-mono font-light tracking-wider leading-relaxed`}
    >
      <CosmicBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 theme-transition ${
              isDarkMode ? 'theme-text-primary' : 'text-foreground'
            }`}
          >
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p
            className={`text-lg mt-6 max-w-2xl mx-auto theme-transition ${
              isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
            }`}
          >
            Have a question, a project, or just want to connect? Don’t hesitate to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className={`animate-fade-in theme-transition ${
              isDarkMode ? 'bg-zinc-900/60 border-zinc-700 backdrop-blur-sm' : ''
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Send className="h-5 w-5 text-primary" />
                <span>Send Me a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 theme-transition ${
                      isDarkMode ? 'theme-text-primary' : 'text-foreground'
                    }`}
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 theme-transition ${
                      isDarkMode ? 'theme-text-primary' : 'text-foreground'
                    }`}
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 theme-transition ${
                      isDarkMode ? 'theme-text-primary' : 'text-foreground'
                    }`}
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, question, or request..."
                    rows={6}
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3
                className={`text-2xl font-semibold mb-6 theme-transition ${
                  isDarkMode ? 'theme-text-primary' : 'text-foreground'
                }`}
              >
                Stay Connected
              </h3>
              <p
                className={`leading-relaxed mb-8 theme-transition ${
                  isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                }`}
              >
                I’m always open to new technical challenges, innovative collaborations, or simply chatting about Data Science and AI. Feel free to reach out using any of the options below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className={`p-4 hover:shadow-card-hover transition-all duration-300 hover:scale-105 theme-transition ${
                    isDarkMode ? 'bg-zinc-900/60 border-zinc-700' : ''
                  }`}
                >
                  <CardContent className="p-0">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 theme-transition ${
                        isDarkMode
                          ? 'text-primary hover:text-primary/80'
                          : 'text-foreground hover:text-primary'
                      }`}
                    >
                      <div className={`p-3 rounded-lg bg-muted ${contact.color}`}>
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p
                          className={`text-sm theme-transition ${
                            isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                          }`}
                        >
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div
              className={`mt-8 p-6 rounded-lg theme-transition ${
                isDarkMode ? 'bg-zinc-900/50 border border-zinc-700' : 'bg-muted/50'
              }`}
            >
              <h4
                className={`font-semibold mb-2 theme-transition ${
                  isDarkMode ? 'theme-text-primary' : 'text-foreground'
                }`}
              >
                Availability
              </h4>
              <p
                className={`text-sm theme-transition ${
                  isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                }`}
              >
                Currently on an apprenticeship contract. Typical response time: 24–48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
