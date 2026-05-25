import { motion } from "framer-motion";
import { useRoute, Link } from "wouter";
import { projects } from "@/data/projects";
import { teamMembers } from "@/data/team";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";

export function ProjectDetail() {
  const [, params] = useRoute("/projets/:id");
  const project = projects.find(p => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="display-4 font-bold mb-4">Projet introuvable</h1>
          <Link href="/projets" className="btn btn-primary">Retour aux projets</Link>
        </div>
      </div>
    );
  }

  const projectTeam = teamMembers.filter(m => project.teamMemberIds.includes(m.id));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-12 pb-24"
    >
      <div className="container">
        <Link href="/projets" className="text-muted-foreground hover:text-primary d-inline-flex align-items-center gap-2 mb-8 text-decoration-none font-medium transition-colors">
          <ArrowLeft size={20} /> Retour aux projets
        </Link>

        <div className="row g-5">
          <div className="col-lg-8" data-aos="fade-right">
            <h1 className="display-4 font-black mb-4">{project.title}</h1>
            <p className="lead text-muted-foreground mb-8">{project.shortDescription}</p>
            
            <img 
              src={project.image} 
              alt={project.title} 
              className="img-fluid rounded-3xl shadow-md w-100 mb-8 object-cover"
              style={{ maxHeight: '500px' }}
            />

            <h2 className="h3 font-bold mb-4">À propos du projet</h2>
            <p className="text-lg text-muted-foreground mb-8 whitespace-pre-line">
              {project.fullDescription}
            </p>

            <h2 className="h3 font-bold mb-4">Fonctionnalités clés</h2>
            <ul className="list-unstyled mb-8">
              {project.features.map((feature, i) => (
                <li key={i} className="d-flex align-items-start gap-3 mb-3 text-lg text-muted-foreground">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4" data-aos="fade-left">
            <div className="card border-0 shadow-sm bg-card rounded-3xl p-4 p-lg-5 sticky-top" style={{ top: '100px' }}>
              <div className="d-flex flex-column gap-3 mb-8">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg rounded-pill w-100 d-flex align-items-center justify-content-center gap-2 text-white border-0" style={{ backgroundColor: 'hsl(var(--primary))' }}>
                    Voir le site en direct <ExternalLink size={20} />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-lg rounded-pill w-100 d-flex align-items-center justify-content-center gap-2 border-2">
                    <Github size={20} /> Code Source
                  </a>
                )}
              </div>

              <hr className="my-4 border-border" />

              <h3 className="h5 font-bold mb-4">Technologies</h3>
              <div className="d-flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="badge bg-secondary/10 text-secondary px-3 py-2 rounded-pill font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="h5 font-bold mb-4">Équipe du projet</h3>
              <div className="d-flex flex-column gap-3">
                {projectTeam.map(member => (
                  <div key={member.id} className="d-flex align-items-center gap-3">
                    <img src={member.avatar} alt={member.name} className="rounded-circle object-cover" width="48" height="48" />
                    <div>
                      <h4 className="h6 font-bold mb-0">{member.name}</h4>
                      <span className="text-sm text-muted-foreground">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
