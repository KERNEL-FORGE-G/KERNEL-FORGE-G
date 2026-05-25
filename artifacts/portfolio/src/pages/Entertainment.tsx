import { motion } from "framer-motion";

const activities = [
  {
    title: "Hackathons Internes",
    description: "48h pour prototyper des idées folles.",
    size: "col-md-8 col-lg-8"
  },
  {
    title: "Tech Meetups",
    description: "Partage de connaissances avec la communauté.",
    size: "col-md-4 col-lg-4"
  },
  {
    title: "Team Building",
    description: "Retraites annuelles pour renforcer les liens.",
    size: "col-md-4 col-lg-4"
  },
  {
    title: "Movie Nights",
    description: "Popcorn et films de science-fiction.",
    size: "col-md-8 col-lg-8"
  },
  {
    title: "Open Source Days",
    description: "Contribution collective à des projets libres.",
    size: "col-12"
  }
];

export function Entertainment() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24"
    >
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="display-4 font-black text-foreground mb-4"><span className="text-secondary">Divertissement</span> & Culture</h1>
          <p className="lead text-muted-foreground max-w-2xl mx-auto">
            La culture d'entreprise chez Kernel Forge, c'est un savant mélange de rigueur technique et de moments inoubliables.
          </p>
        </div>

        <div className="row g-4">
          {activities.map((activity, index) => (
            <div key={index} className={activity.size} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 rounded-3xl overflow-hidden position-relative hover-lift group" style={{ minHeight: '300px' }}>
                <div className="position-absolute inset-0 bg-secondary opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="position-absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                
                <div className="card-body position-relative z-20 d-flex flex-column justify-content-end p-5 text-white h-100">
                  <h3 className="h3 font-bold mb-2">{activity.title}</h3>
                  <p className="text-white/80 text-lg mb-0 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center" data-aos="zoom-in">
          <div className="bg-primary/10 rounded-3xl p-5 d-inline-block w-100 max-w-4xl mx-auto">
            <h2 className="h3 font-bold text-primary mb-3">Rejoignez l'aventure</h2>
            <p className="text-lg text-muted-foreground mb-0">
              Nous sommes toujours à la recherche de talents exceptionnels qui partagent notre vision et notre énergie.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
