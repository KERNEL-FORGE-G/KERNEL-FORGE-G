import { Link } from "wouter";
import { motion } from "framer-motion";
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNodedotjs, SiPostgresql, SiDocker, SiFigma } from "react-icons/si";
import { ChevronDown, ArrowRight } from "lucide-react";
const logoUrl = "/logo.svg";

export function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="min-vh-100 d-flex align-items-center position-relative overflow-hidden hero-gradient">
        <div className="container position-relative z-10 text-center pt-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img src={logoUrl} alt="CamStudio Logo" className="h-32 md:h-48 mx-auto drop-shadow-2xl animate__animated animate__pulse animate__infinite animate__slower" />
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="display-2 font-black mb-4 tracking-tight"
          >
            Nous construisons le <span className="text-primary">futur numérique</span><br className="d-none d-md-block" /> du Cameroun.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lead text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Une équipe passionnée de jeunes développeurs. Nous créons des logiciels audacieux, rapides et conçus pour résoudre de vrais problèmes.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="d-flex flex-wrap justify-content-center gap-4"
          >
            <Link href="/projets" className="btn btn-primary btn-lg rounded-pill px-5 py-3 font-medium d-flex align-items-center gap-2 hover-lift text-white border-0" style={{ backgroundColor: 'hsl(var(--primary))' }}>
              Découvrir nos projets <ArrowRight size={20} />
            </Link>
            <Link href="/equipe" className="btn btn-outline-secondary btn-lg rounded-pill px-5 py-3 font-medium hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Rencontrer l'équipe
            </Link>
          </motion.div>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x pb-8 animate__animated animate__bounce animate__infinite">
          <ChevronDown size={32} className="text-muted-foreground opacity-50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
              <div className="p-4 rounded-2xl bg-muted/30">
                <h2 className="display-4 font-black text-primary mb-2">12+</h2>
                <p className="text-lg text-muted-foreground font-medium">Projets Déployés</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="p-4 rounded-2xl bg-muted/30">
                <h2 className="display-4 font-black text-secondary mb-2">4</h2>
                <p className="text-lg text-muted-foreground font-medium">Experts Passionnés</p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="p-4 rounded-2xl bg-muted/30">
                <h2 className="display-4 font-black text-accent mb-2">3</h2>
                <p className="text-lg text-muted-foreground font-medium">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <h2 className="h1 font-bold mb-4">Qui sommes-nous ?</h2>
              <div className="h-1 w-20 bg-primary mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground mb-4">
                Basés au cœur du Cameroun, nous sommes un studio de développement logiciel qui croit au potentiel technologique de l'Afrique. Nous ne nous contentons pas d'écrire du code, nous concevons des expériences.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                De l'idée à la production, notre approche est résolument moderne, agile et centrée sur l'utilisateur. Nous aimons ce que nous faisons, et ça se voit dans nos produits.
              </p>
              <Link href="/equipe" className="text-primary font-bold text-lg d-flex align-items-center gap-2 hover:gap-3 transition-all text-decoration-none">
                Rejoignez notre énergie <ArrowRight size={20} />
              </Link>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
              <div className="row g-3">
                <div className="col-6">
                  <div className="bg-secondary/10 p-4 rounded-3xl h-100 d-flex flex-column justify-content-center text-center hover-lift">
                    <h3 className="h4 font-bold text-secondary mb-2">Agilité</h3>
                    <p className="text-sm text-muted-foreground mb-0">Développement rapide et itératif</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-primary/10 p-4 rounded-3xl h-100 d-flex flex-column justify-content-center text-center hover-lift mt-4">
                    <h3 className="h4 font-bold text-primary mb-2">Qualité</h3>
                    <p className="text-sm text-muted-foreground mb-0">Code propre et maintenable</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-accent/10 p-4 rounded-3xl h-100 d-flex flex-column justify-content-center text-center hover-lift mt-n4">
                    <h3 className="h4 font-bold text-accent mb-2">Design</h3>
                    <p className="text-sm text-muted-foreground mb-0">Interfaces belles et intuitives</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="bg-muted p-4 rounded-3xl h-100 d-flex flex-column justify-content-center text-center hover-lift">
                    <h3 className="h4 font-bold text-foreground mb-2">Innovation</h3>
                    <p className="text-sm text-muted-foreground mb-0">Toujours à la pointe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-card">
        <div className="container text-center">
          <h2 className="h2 font-bold mb-4" data-aos="fade-up">Notre Arsenal Technologique</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Nous utilisons les meilleurs outils pour garantir la performance, la sécurité et la scalabilité de nos applications.
          </p>
          
          <div className="d-flex flex-wrap justify-content-center gap-5" data-aos="zoom-in" data-aos-delay="200">
            {[
              { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
              { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
              { icon: SiPython, color: "#3776AB", name: "Python" },
              { icon: SiReact, color: "#61DAFB", name: "React" },
              { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
              { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
              { icon: SiDocker, color: "#2496ED", name: "Docker" },
              { icon: SiFigma, color: "#F24E1E", name: "Figma" },
            ].map((tech, i) => (
              <div key={i} className="text-center group hover-lift cursor-pointer">
                <div className="w-20 h-20 bg-background rounded-2xl shadow-sm d-flex align-items-center justify-content-center mb-3 transition-transform group-hover:scale-110">
                  <tech.icon size={40} style={{ color: tech.color }} />
                </div>
                <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
