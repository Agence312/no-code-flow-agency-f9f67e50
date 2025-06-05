
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Settings, BarChart, Globe, Database, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Optimisation des Processus",
      description: "Analyse et amélioration de vos workflows existants pour gagner en efficacité et réduire les tâches manuelles répétitives.",
      features: [
        "Audit complet de vos processus actuels",
        "Identification des goulots d'étranglement",
        "Recommandations d'optimisation",
        "Mise en place de nouveaux workflows"
      ],
      price: "À partir de 2 500€",
      link: "/services/process-optimization"
    },
    {
      icon: Zap,
      title: "Automatisation & Intégration",
      description: "Connectez vos outils existants et automatisez vos tâches répétitives avec des solutions sur mesure.",
      features: [
        "Intégration d'APIs tierces",
        "Automatisation avec Zapier/Make",
        "Synchronisation de données",
        "Workflows intelligents"
      ],
      price: "À partir de 1 500€",
      link: "/services/automation"
    },
    {
      icon: Settings,
      title: "Développement No-Code",
      description: "Création d'applications web et mobile complètes sans une ligne de code, adaptées à vos besoins spécifiques.",
      features: [
        "Applications web responsive",
        "Applications mobiles natives",
        "Bases de données intégrées",
        "Interface utilisateur intuitive"
      ],
      price: "À partir de 5 000€",
      link: "/services/no-code-development"
    },
    {
      icon: BarChart,
      title: "Tableaux de Bord & BI",
      description: "Visualisez vos données métier avec des dashboards interactifs et des rapports automatisés en temps réel.",
      features: [
        "Dashboards temps réel",
        "Rapports automatiques",
        "KPIs personnalisés",
        "Alertes intelligentes"
      ],
      price: "À partir de 3 000€",
      link: "/services/business-intelligence"
    }
  ];

  const methodology = [
    {
      step: "01",
      title: "Analyse & Audit",
      description: "Nous analysons vos processus actuels et identifions les opportunités d'amélioration."
    },
    {
      step: "02",
      title: "Conception",
      description: "Nous concevons la solution optimale adaptée à vos besoins et contraintes."
    },
    {
      step: "03",
      title: "Développement",
      description: "Nous développons votre solution en mode agile avec des points réguliers."
    },
    {
      step: "04",
      title: "Déploiement & Formation",
      description: "Nous déployons la solution et formons vos équipes à son utilisation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions no-code sur mesure pour optimiser vos processus, automatiser vos tâches et accélérer votre transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <Link to={service.link}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                        En savoir plus
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Notre Méthodologie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus éprouvé pour garantir le succès de votre projet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons ensemble comment nous pouvons vous aider.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
