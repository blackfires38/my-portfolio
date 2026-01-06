import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Phone, Linkedin, ArrowLeft, ExternalLink } from "lucide-react"

export default function CVPage() {
  const cvDownloadLink = "https://votre-lien-cv.pdf" // Remplacez par votre lien

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>
        </Button>

        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">Nathan Cattin</h1>
            <p className="mb-6 text-xl text-muted-foreground">Étudiant BTS SIO - Spécialité SISR</p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <a
                href="mailto:cattin.nathan@orange.fr"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                cattin.nathan@orange.fr
              </a>
              <a href="tel:0678431646" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4" />
                06 78 43 16 46
              </a>
              <a
                href="https://fr.linkedin.com/in/nathan-cattin-4829632a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            {/* Download Button */}
            <div className="mt-6">
              <Button asChild size="lg" className="gap-2">
                <a href={cvDownloadLink} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" />
                  Télécharger mon CV (PDF)
                  <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
              <p className="mt-2 text-xs text-muted-foreground">Le fichier PDF s'ouvrira dans un nouvel onglet</p>
            </div>
          </div>

          {/* Formation */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>🎓 Formation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold">BTS Services Informatiques aux Organisations</h3>
                  <Badge variant="secondary">2024 - 2026</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Option SISR (Solutions d'Infrastructure, Systèmes et Réseaux)
                </p>
                <p className="text-sm text-muted-foreground">En alternance</p>
              </div>
            </CardContent>
          </Card>

          {/* Expérience Professionnelle */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>💼 Expérience Professionnelle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-semibold">Alternant Technicien Infrastructure</h3>
                  <Badge variant="secondary">2024 - Présent</Badge>
                </div>
                <p className="mb-3 text-sm font-medium text-muted-foreground">Première année BTS SIO</p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Gestion et administration de Kaspersky Security avec synchronisation Active Directory</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>
                      Installation et organisation d'infrastructure réseau (câblage RJ45, switches, baies de brassage)
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Support technique niveau 1 et 2 via système de ticketing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Participation aux migrations Windows 11 via déploiement réseau (MDT/WDS)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Gestion de flotte iPad avec Microsoft Intune</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Compétences Techniques */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>🔧 Compétences Techniques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="mb-3 font-semibold">Cybersécurité & Administration</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Kaspersky Security</Badge>
                  <Badge>Active Directory</Badge>
                  <Badge>GPO</Badge>
                  <Badge>Gestion des droits</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Infrastructure Réseau</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Câblage RJ45</Badge>
                  <Badge>Switches</Badge>
                  <Badge>Baies de brassage</Badge>
                  <Badge>Infrastructure IT</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Systèmes & Déploiement</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Windows 10/11</Badge>
                  <Badge>MDT/WDS</Badge>
                  <Badge>Déploiement réseau</Badge>
                  <Badge>Gestion de parc</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Mobile Device Management</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Microsoft Intune</Badge>
                  <Badge>iOS Management</Badge>
                  <Badge>MDM</Badge>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Support & Service</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Help Desk</Badge>
                  <Badge>Ticketing</Badge>
                  <Badge>Support utilisateur</Badge>
                  <Badge>Documentation</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Qualités Professionnelles */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>✨ Qualités Professionnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Autonomie et rigueur</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Esprit d'équipe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Capacité d'adaptation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Résolution de problèmes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Curiosité technique</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm">Sens du service</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
