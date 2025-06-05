
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Zap, Puzzle, Workflow, Database } from "lucide-react";
import { Link } from "react-router-dom";

const Automation = () => {
  const tools = [
    {
      name: "Zapier",
      description: "Connecte plus de 5000 applications",
      icon: Puzzle
    },
    {
      name: "Make.com",
      description: "Automatisation visuelle avancée",
      icon: Workflow
    },
    {
      name: "APIs",
      description: "Intégrations sur mesure",
      icon: Database
    }
  ];

  const useCases = [
    "Synchronisation CRM ↔ Comptabilité",
    "Automatisation des emails de suivi",
    "Création automatique de factures",
    "Notifications Slack depuis formulaires",
    "Sauvegarde automatique de données",
    "Génération de rapports périodiques"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Automatisation & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intégration</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connectez vos outils existants et automatisez vos tâches répétitives pour libérer du temps et réduire les erreurs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Découvrir les possibilités
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos outils de prédilection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons les meilleures plateformes d'automatisation du marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg">{tool.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cas d'usage concrets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quelques exemples d'automatisations que nous mettons en place régulièrement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analyse</h3>
              <p className="text-gray-600">Nous identifions vos tâches répétitives et vos besoins d'intégration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Configuration</h3>
              <p className="text-gray-600">Nous configurons les automatisations et testons leur fonctionnement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Déploiement</h3>
              <p className="text-gray-600">Mise en production et formation de vos équipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Automatisez dès aujourd'hui !
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Libérez votre potentiel en automatisant vos tâches répétitives. Gagnez du temps et de l'efficacité.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Demander une démonstration
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Automation;
