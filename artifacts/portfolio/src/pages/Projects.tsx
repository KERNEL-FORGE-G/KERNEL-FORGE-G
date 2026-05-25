import { motion } from "framer-motion";
import { Link } from "wouter";
import { listProjectCards } from "@/controllers/project.controller";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24"
    >
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="display-4 font-black text-foreground mb-4">Nos <span className="text-primary">Projets</span></h1>
          <p className="lead text-muted-foreground max-w-2xl mx-auto">
            Nous ne construisons pas que des applications, nous créons des solutions qui transforment la façon dont les gens travaillent et vivent au Cameroun.
          </p>
        </div>

        <div className="row g-5">
          {listProjectCards().map((project, index) => (
            <div key={project.id} className="col-12" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card border-0 rounded-3xl overflow-hidden bg-card hover-lift transition-all section-shell">
                <div className={`row g-0 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="col-lg-6">
                    <div className="h-100 position-relative p-4 p-lg-5 bg-muted/30 d-flex align-items-center justify-content-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="img-fluid rounded-xl shadow-lg w-100 project-logo-fit"
                        style={{ maxHeight: '400px' }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5">
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="badge bg-secondary/10 text-secondary px-3 py-2 rounded-pill font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <h2 className="card-title h2 font-bold mb-3">{project.title}</h2>
                      <p className="card-text text-lg text-muted-foreground mb-5">
                        {project.shortDescription}
                      </p>
                      <Link href={`/projets/${project.id}`} className="btn btn-primary rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2 text-white border-0" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                        Voir les détails <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
