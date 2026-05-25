import { Link } from "wouter";
import { SiGithub } from "react-icons/si";
import { Linkedin, Twitter } from "lucide-react";
const logoUrl = "/logo.svg";

export function Footer() {
  return (
    <footer className="bg-card text-foreground py-12 mt-20 border-t border-border">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={logoUrl} alt="Logo" className="h-8 w-auto opacity-80 hover:opacity-100 transition-all duration-300" />
              <span className="font-display font-bold text-lg text-primary">Kernel Forge</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Nous forgeons le futur numérique du Cameroun. Une équipe de jeunes développeurs passionnés qui créent des logiciels qui comptent.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiGithub size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="font-display font-semibold mb-3">Navigation</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-decoration-none">Accueil</Link></li>
              <li><Link href="/equipe" className="text-muted-foreground hover:text-primary transition-colors text-decoration-none">Équipe</Link></li>
              <li><Link href="/projets" className="text-muted-foreground hover:text-primary transition-colors text-decoration-none">Projets</Link></li>
              <li><Link href="/loisirs" className="text-muted-foreground hover:text-primary transition-colors text-decoration-none">Loisirs</Link></li>
              <li><Link href="/divertissement" className="text-muted-foreground hover:text-primary transition-colors text-decoration-none">Divertissement</Link></li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5 className="font-display font-semibold mb-3">Contact</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-muted-foreground">
              <li>Silicon Valley Cameroun</li>
              <li>Bonamoussadi, Yaoundé</li>
              <li>Cameroun</li>
              <li><a href="mailto:hello@kernelforge.cm" className="text-primary text-decoration-none mt-2 d-inline-block">hello@kernelforge.cm</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kernel Forge. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
