import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";
import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Team() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24"
    >
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="display-4 font-black text-foreground mb-4">Notre <span className="text-primary">Équipe</span></h1>
          <p className="lead text-muted-foreground max-w-2xl mx-auto">
            La force de Kernel Forge réside dans la passion et l'expertise de ses membres. Découvrez les visages derrière nos lignes de code.
          </p>
        </div>

        <div className="row g-5">
          {teamMembers.map((member, index) => (
            <div key={member.id} className="col-lg-6" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm rounded-3xl overflow-hidden bg-card hover-lift transition-all">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <div className="h-100 w-100 position-relative" style={{ minHeight: "250px" }}>
                      <img 
                        src={member.avatar} 
                        alt={member.name} 
                        className="position-absolute w-100 h-100 object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5">
                      <h3 className="card-title h4 font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="card-text text-muted-foreground mb-4">{member.bio}</p>
                      <div className="d-flex gap-3">
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noreferrer" className="btn btn-light rounded-circle p-2 text-foreground hover:bg-primary hover:text-white transition-colors">
                            <SiGithub size={20} />
                          </a>
                        )}
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noreferrer" className="btn btn-light rounded-circle p-2 text-foreground hover:bg-secondary hover:text-white transition-colors">
                            <Linkedin size={20} />
                          </a>
                        )}
                      </div>
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
