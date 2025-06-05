
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Settings, Smartphone, Globe, Database } from "lucide-react";
import { Link } from "react-router-dom";

const NoCodeDevelopment = () => {
  const platforms = [
    {
      name: "Bubble",
      description: "Applications web complexes",
      icon: Globe,
      features: ["Workflows avancés", "Base de données", "API intégrées"]
    },
    {
      name: "Glide",
      description: "Applications mobiles",
      icon: Smartphone,
      features: ["Design natif", "Synchronisation cloud", "Notifications push"]
    },
    {
      name: "Webflow",
      description: "Sites web professionnels",
      icon: Settings,
      features: ["Design sur mesure", "CMS intégré", "SEO optimisé"]
    }
  ];

  const benefits = [
    "Développement 10x plus rapide",
    "Coûts réduits de 70%",
    "Maintenance simplifiée",
    "Évolutions rapides",
    "Pas de dépendance technique",
    "Prototypage ultra-rapide"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Settings className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Développement <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">No-Code</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Créez des applications web et mobile professionnelles sans une ligne de code. Rapid prototyping et déploiement express.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Créer mon application
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Voir le portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nos plateformes de développement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous maîtrisons les meilleures plateformes no-code pour créer vos applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <CardDescription className="text-lg text-gray-600">{platform.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pourquoi choisir le no-code ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les avantages du développement sans code pour votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
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
              Notre processus de développement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Analyse</h3>
              <p className="text-gray-600">Définition des besoins et spécifications fonctionnelles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prototype</h3>
              <p className="text-gray-600">Création rapide d'un prototype fonctionnel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Développement</h3>
              <p className="text-gray-600">Construction de l'application complète</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Déploiement</h3>
              <p className="text-gray-600">Mise en ligne et formation utilisateurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Types d'applications que nous créons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Database className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">CRM Sur Mesure</h3>
              <p className="text-gray-600 text-sm">Gestion client adaptée à vos processus</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Outils Internes</h3>
              <p className="text-gray-600 text-sm">Applications métier pour vos équipes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apps Mobile</h3>
              <p className="text-gray-600 text-sm">Applications iOS et Android</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plateformes Web</h3>
              <p className="text-gray-600 text-sm">Sites et applications web complexes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Concrétisons votre idée !
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transformez votre vision en application fonctionnelle en quelques semaines seulement.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Démarrer mon projet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NoCodeDevelopment;
