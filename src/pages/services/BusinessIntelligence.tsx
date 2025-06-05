
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, BarChart, PieChart, LineChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessIntelligence = () => {
  const features = [
    {
      icon: BarChart,
      title: "Tableaux de bord interactifs",
      description: "Visualisations dynamiques de vos données métier en temps réel"
    },
    {
      icon: PieChart,
      title: "Rapports automatisés",
      description: "Génération automatique de rapports périodiques personnalisés"
    },
    {
      icon: LineChart,
      title: "Analyses prédictives",
      description: "Tendances et projections pour anticiper l'avenir"
    },
    {
      icon: TrendingUp,
      title: "KPIs en temps réel",
      description: "Suivi des indicateurs clés de performance en continu"
    }
  ];

  const dataTypes = [
    "Données de vente et CA",
    "Métriques marketing",
    "Performance opérationnelle",
    "Satisfaction client",
    "Données financières",
    "Analytics web"
  ];

  const tools = [
    "Power BI",
    "Tableau",
    "Looker Studio",
    "Metabase",
    "Retool",
    "Bubble Dashboard"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <BarChart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tableaux de Bord & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Business Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transformez vos données en insights actionables avec des dashboards interactifs et des rapports automatisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Créer mon dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Voir des exemples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Fonctionnalités clés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des tableaux de bord complets pour piloter votre activité en temps réel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Quelles données visualiser ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nous connectons et visualisons tous types de données métier pour vous donner une vue d'ensemble complète.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {dataTypes.map((type, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-800 font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Outils que nous utilisons</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm text-center font-medium text-gray-800">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre approche
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'analyse de vos besoins à la livraison de votre dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audit des données</h3>
              <p className="text-gray-600">Identification des sources de données et des KPIs prioritaires</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Connexions</h3>
              <p className="text-gray-600">Intégration et synchronisation de vos sources de données</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">Création de visualisations claires et intuitives</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Automatisation</h3>
              <p className="text-gray-600">Mise en place de rapports automatiques et alertes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Les bénéfices pour votre entreprise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-4">85%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Gain de temps</h3>
              <p className="text-gray-600">dans l'analyse et le reporting</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-4">3x</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Plus rapide</h3>
              <p className="text-gray-600">prise de décision basée sur les données</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-4">100%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visibilité</h3>
              <p className="text-gray-600">sur la performance de votre activité</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Donnez vie à vos données !
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Créons ensemble le dashboard qui transformera votre façon de piloter votre entreprise.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Démarrer mon projet BI
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessIntelligence;
