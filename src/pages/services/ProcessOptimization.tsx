
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Workflow, TrendingUp, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessOptimization = () => {
  const benefits = [
    "Réduction des tâches manuelles répétitives",
    "Amélioration de la productivité équipe",
    "Diminution des erreurs humaines",
    "Standardisation des processus",
    "Gain de temps significatif",
    "Meilleure traçabilité des actions"
  ];

  const methodology = [
    {
      step: "Audit",
      title: "Analyse des processus existants",
      description: "Cartographie complète de vos workflows actuels et identification des points de friction."
    },
    {
      step: "Optimisation",
      title: "Conception des nouveaux processus",
      description: "Redéfinition optimisée de vos workflows avec élimination des étapes inutiles."
    },
    {
      step: "Implémentation",
      title: "Mise en place des solutions",
      description: "Déploiement des nouveaux processus avec formation de vos équipes."
    },
    {
      step: "Suivi",
      title: "Monitoring et ajustements",
      description: "Suivi des performances et optimisations continues selon les retours."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Workflow className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Optimisation des <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Processus</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transformez vos processus métier pour gagner en efficacité, réduire les coûts et améliorer la satisfaction de vos équipes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Demander un audit gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Voir nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Pourquoi optimiser vos processus ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'optimisation de vos processus métier vous permet de libérer le potentiel de votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre méthodologie éprouvée
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir le succès de votre optimisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">40%</div>
              <div className="text-gray-600">Gain de productivité moyen</div>
            </div>
            <div className="p-8">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">60h</div>
              <div className="text-gray-600">Temps économisé par mois</div>
            </div>
            <div className="p-8">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Satisfaction client</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à optimiser vos processus ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discutons de vos défis et découvrons ensemble comment transformer vos processus métier.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Planifier un audit gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessOptimization;
