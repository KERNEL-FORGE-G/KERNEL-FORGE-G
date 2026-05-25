import { motion } from "framer-motion";
import { Camera, Gamepad2, MapPin, Music, Palmtree, Trophy, Utensils } from "lucide-react";

const hobbies = [
  {
    title: "Football",
    description: "Les matchs du vendredi soir sont sacrés. C'est là que l'esprit d'équipe se forge hors des écrans.",
    icon: Trophy,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30"
  },
  {
    title: "Musique",
    description: "Notre playlist de bureau mélange Afrobeats, Makossa et Lo-Fi pour coder dans l'ambiance parfaite.",
    icon: Music,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30"
  },
  {
    title: "Gaming",
    description: "Des tournois FIFA intenses pendant les pauses déjeuner. Le perdant paie les beignets.",
    icon: Gamepad2,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
  },
  {
    title: "Gastronomie Locale",
    description: "Ndole, Poulet DG, Poisson braisé... Nous explorons les meilleurs maquis de la ville ensemble.",
    icon: Utensils,
    color: "bg-orange-100 text-orange-600 dark:bg-orange-900/30"
  },
  {
    title: "Voyage",
    description: "Explorer les paysages magnifiques du Cameroun, de Kribi à l'Ouest, pour se ressourcer.",
    icon: MapPin,
    color: "bg-teal-100 text-teal-600 dark:bg-teal-900/30"
  },
  {
    title: "Photographie",
    description: "Capturer l'énergie vibrante de nos villes et les moments spontanés de l'équipe.",
    icon: Camera,
    color: "bg-pink-100 text-pink-600 dark:bg-pink-900/30"
  }
];

export function Hobbies() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 pb-24"
    >
      <div className="container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="display-4 font-black text-foreground mb-4">Nos <span className="text-accent">Loisirs</span></h1>
          <p className="lead text-muted-foreground max-w-2xl mx-auto">
            Nous codons dur, mais nous savons aussi décompresser. Voici ce qui nous anime quand nous fermons nos laptops.
          </p>
        </div>

        <div className="row g-4">
          {hobbies.map((hobby, index) => (
            <div key={index} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm rounded-3xl p-4 p-lg-5 text-center bg-card hover-lift transition-all">
                <div className={`w-20 h-20 mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4 ${hobby.color}`}>
                  <hobby.icon size={40} />
                </div>
                <h3 className="h4 font-bold mb-3">{hobby.title}</h3>
                <p className="text-muted-foreground mb-0">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
