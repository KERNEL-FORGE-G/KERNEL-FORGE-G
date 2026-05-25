import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
const logoUrl = "/logo.png";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        isScrolled ? "glass-nav py-2 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img src={logoUrl} alt="Logo" className="h-10 w-auto" />
          <span className="font-display font-bold text-xl m-0" style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)", WebkitBackgroundClip: "text", color: "transparent" }}>Kernel Forge</span>
        </Link>
        <button
          className="navbar-toggler border-0 shadow-none text-foreground"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-2 gap-lg-4">
            <li className="nav-item">
              <Link href="/" className={`nav-link text-foreground font-medium ${location === "/" ? "active" : ""}`}>
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/equipe" className={`nav-link text-foreground font-medium ${location === "/equipe" ? "active" : ""}`}>
                Notre Équipe
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projets" className={`nav-link text-foreground font-medium ${location.startsWith("/projets") ? "active" : ""}`}>
                Projets
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/loisirs" className={`nav-link text-foreground font-medium ${location === "/loisirs" ? "active" : ""}`}>
                Loisirs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/divertissement" className={`nav-link text-foreground font-medium ${location === "/divertissement" ? "active" : ""}`}>
                Divertissement
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
