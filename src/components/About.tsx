
import { Users, Target, Award, Clock } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, number: "50+", label: "Clients satisfaits" },
    { icon: Target, number: "100+", label: "Projets réalisés" },
    { icon: Award, number: "3 ans", label: "D'expérience" },
    { icon: Clock, number: "24h", label: "Support disponible" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Votre partenaire de{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                transformation digitale
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nous sommes une équipe passionnée d'experts en no-code et automatisation. 
              Notre mission est de démocratiser la technologie en rendant la création 
              d'applications accessible à tous, sans compromis sur la qualité.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Expertise technique</h3>
                  <p className="text-gray-600">Maîtrise des derniers outils no-code et d'automatisation</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Approche personnalisée</h3>
                  <p className="text-gray-600">Solutions sur mesure adaptées à vos besoins spécifiques</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Accompagnement complet</h3>
                  <p className="text-gray-600">De la conception au déploiement et maintenance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
