
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search, Code, Rocket } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Consultation",
      description: "Nous analysons vos besoins et définissons ensemble les objectifs de votre projet."
    },
    {
      icon: Search,
      title: "2. Audit & Stratégie",
      description: "Audit de vos processus existants et élaboration d'une stratégie sur mesure."
    },
    {
      icon: Code,
      title: "3. Développement",
      description: "Création de votre solution no-code avec tests et validation en continu."
    },
    {
      icon: Rocket,
      title: "4. Déploiement",
      description: "Mise en production, formation de vos équipes et accompagnement post-lancement."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Notre Processus
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une méthodologie éprouvée pour garantir le succès de votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg relative">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
