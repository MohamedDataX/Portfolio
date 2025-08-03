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
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais."
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
        isDarkMode ? 'theme-bg-dark' : 'bg-background'
      } font-mono font-light tracking-wider leading-relaxed`}
    >
      {isDarkMode && (
        <CosmicBackground
          className="opacity-10"
          opacity={{ dark: 'opacity-15', light: 'opacity-8' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 theme-transition ${
              isDarkMode ? 'theme-text-primary' : 'text-foreground'
            }`}
          >
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
          <p
            className={`text-lg mt-6 max-w-2xl mx-auto theme-transition ${
              isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
            }`}
          >
            Une question, un projet ou simplement envie d'échanger ? N&apos;hésitez pas à me contacter !
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
                <span>Envoyez-moi un message</span>
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
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
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
                    placeholder="votre.email@exemple.com"
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
                    placeholder="Décrivez votre projet, question ou demande..."
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
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
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
                Restons connectés
              </h3>
              <p
                className={`leading-relaxed mb-8 theme-transition ${
                  isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                }`}
              >
                Je suis toujours intéressé par de nouveaux défis techniques, des collaborations
                innovantes ou simplement discuter de Data Science et d&apos;IA. N&apos;hésitez pas à me
                contacter par l&apos;un des moyens ci-dessous.
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
                Disponibilité
              </h4>
              <p
                className={`text-sm theme-transition ${
                  isDarkMode ? 'theme-text-muted' : 'text-muted-foreground'
                }`}
              >
                Actuellement ouvert aux opportunités de consulting et projets freelance. Temps de réponse habituel : 24-48h.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
