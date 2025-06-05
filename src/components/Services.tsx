
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Database, Workflow, Globe, Zap, BarChart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Optimisation des Processus",
      description: "Analyse et amélioration de vos workflows existants pour gagner en efficacité et réduire les tâches manuelles répétitives.",
      features: ["Audit complet de processus", "Identification des goulots", "Workflows personnalisés"],
      link: "/services/process-optimization"
    },
    {
      icon: Zap,
      title: "Automatisation & Intégration",
      description: "Automatisation de vos tâches répétitives et workflows avec Zapier, Make.com et autres outils d'automatisation.",
      features: ["Gain de temps significatif", "Réduction des erreurs", "Intégration d'APIs"],
      link: "/services/automation"
    },
    {
      icon: Smartphone,
      title: "Développement No-Code",
      description: "Création d'applications web et mobile sans ligne de code, déployées rapidement avec des outils comme Bubble, Webflow et Glide.",
      features: ["Interface utilisateur intuitive", "Base de données intégrée", "Déploiement instantané"],
      link: "/services/no-code-development"
    },
    {
      icon: BarChart,
      title: "Tableaux de Bord & BI",
      description: "Visualisation de vos données métier avec des dashboards interactifs et des rapports automatisés.",
      features: ["KPIs en temps réel", "Rapports automatiques", "Alertes intelligentes"],
      link: "/services/business-intelligence"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous proposons une gamme complète de services pour digitaliser et automatiser votre entreprise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
