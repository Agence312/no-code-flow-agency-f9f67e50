
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Shield, Trophy, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Expertise Reconnue",
      description: "Plus de 5 ans d'expérience dans le no-code et l'automatisation avec des centaines de projets réalisés."
    },
    {
      icon: Zap,
      title: "Livraison Rapide",
      description: "Prototypage en 48h, livraison complète en 2-4 semaines. Nous respectons nos délais."
    },
    {
      icon: Users,
      title: "Accompagnement Complet",
      description: "Formation de vos équipes, documentation détaillée et support technique inclus."
    },
    {
      icon: Shield,
      title: "Solutions Sécurisées",
      description: "Respect des standards de sécurité et conformité RGPD pour protéger vos données."
    },
    {
      icon: Trophy,
      title: "ROI Garanti",
      description: "Nos clients économisent en moyenne 40% de leur temps sur les tâches automatisées."
    },
    {
      icon: Heart,
      title: "Support Personnalisé",
      description: "Une équipe dédiée pour vous accompagner tout au long de votre transformation digitale."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous combinons expertise technique et approche humaine pour vous offrir les meilleures solutions no-code
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
