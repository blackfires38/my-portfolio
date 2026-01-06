import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Nathan Cattin</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Étudiant BTS SIO spécialisé en infrastructure et support technique, passionné par la cybersécurité.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/cv" className="text-muted-foreground hover:text-foreground">
                  CV
                </Link>
              </li>
              <li>
                <Link href="/competences" className="text-muted-foreground hover:text-foreground">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:cattin.nathan@orange.fr"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="tel:0678431646"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  Téléphone
                </a>
              </li>
              <li>
                <a
                  href="https://fr.linkedin.com/in/nathan-cattin-4829632a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Informations</h3>
            <p className="text-sm text-muted-foreground">
              BTS SIO - SISR
              <br />
              En alternance
              <br />
              2024 - 2026
            </p>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nathan Cattin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
