
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      category: "No-Code en général",
      questions: [
        {
          id: "nocode-1",
          question: "Qu'est-ce que le no-code ?",
          answer: "Le no-code est une approche de développement qui permet de créer des applications et automatiser des processus sans écrire de code traditionnel. On utilise des interfaces visuelles et des outils de glisser-déposer pour concevoir des solutions fonctionnelles."
        },
        {
          id: "nocode-2",
          question: "Le no-code est-il fiable pour mon entreprise ?",
          answer: "Absolument ! Les plateformes no-code modernes comme Bubble, Airtable, ou Zapier sont utilisées par des milliers d'entreprises dans le monde. Elles offrent une sécurité de niveau entreprise, une scalabilité importante et sont maintenues par des équipes dédiées."
        },
        {
          id: "nocode-3",
          question: "Quelles sont les limites du no-code ?",
          answer: "Le no-code excelle pour la plupart des besoins business classiques. Les limitations peuvent apparaître pour des calculs très complexes, des intégrations très spécifiques ou des volumes de données extrêmes. Dans ces cas, on peut combiner no-code et code traditionnel."
        },
        {
          id: "nocode-4",
          question: "Puis-je migrer vers du code traditionnel plus tard ?",
          answer: "La plupart des plateformes no-code offrent des options d'export ou d'API pour faciliter une migration si nécessaire. Cependant, beaucoup de nos clients découvrent que le no-code répond à tous leurs besoins à long terme."
        }
      ]
    },
    {
      category: "Nos Services",
      questions: [
        {
          id: "services-1",
          question: "Combien coûte un projet no-code ?",
          answer: "Les tarifs varient selon la complexité du projet. Une automatisation simple peut coûter 1 500€, une application complète entre 5 000€ et 15 000€. Nous proposons toujours un devis gratuit après analyse de vos besoins."
        },
        {
          id: "services-2",
          question: "Combien de temps prend le développement ?",
          answer: "Le no-code permet des développements 3 à 10 fois plus rapides que le code traditionnel. Une automatisation prend généralement 1-2 semaines, une application 4-8 semaines selon la complexité."
        },
        {
          id: "services-3",
          question: "Proposez-vous de la maintenance ?",
          answer: "Oui, nous proposons des contrats de maintenance pour assurer le bon fonctionnement de vos solutions, les mises à jour et l'évolution selon vos nouveaux besoins."
        },
        {
          id: "services-4",
          question: "Puis-je modifier l'application moi-même après livraison ?",
          answer: "C'est l'un des avantages du no-code ! Nous vous formons à l'utilisation des outils et vous pouvez ensuite faire des modifications simples vous-même. Pour les changements complexes, nous restons disponibles."
        }
      ]
    },
    {
      category: "Automatisation",
      questions: [
        {
          id: "automation-1",
          question: "Quels processus peut-on automatiser ?",
          answer: "Presque tous ! Gestion des leads, facturation, reporting, synchronisation entre outils, envoi d'emails, création de documents, suivi de projets... Si c'est répétitif, on peut l'automatiser."
        },
        {
          id: "automation-2",
          question: "Mes outils actuels sont-ils compatibles ?",
          answer: "La plupart des outils business modernes ont des API ou des connecteurs natifs. Nous travaillons avec plus de 1000 applications : CRM, ERP, outils de comptabilité, marketing, RH..."
        },
        {
          id: "automation-3",
          question: "Que se passe-t-il si l'automatisation tombe en panne ?",
          answer: "Nous mettons en place des systèmes de monitoring et d'alertes. En cas de problème, vous êtes notifié immédiatement et nous intervenons rapidement pour résoudre le problème."
        }
      ]
    },
    {
      category: "Sécurité & Données",
      questions: [
        {
          id: "security-1",
          question: "Mes données sont-elles sécurisées ?",
          answer: "Oui, nous utilisons uniquement des plateformes certifiées (SOC 2, ISO 27001, GDPR). Vos données sont chiffrées et stockées dans des centres de données sécurisés en Europe."
        },
        {
          id: "security-2",
          question: "Êtes-vous conformes au RGPD ?",
          answer: "Absolument ! Nous intégrons la conformité RGPD dès la conception : gestion des consentements, droit à l'oubli, portabilité des données, registres de traitement..."
        },
        {
          id: "security-3",
          question: "Qui a accès à mes données ?",
          answer: "Seules les personnes que vous autorisez ont accès à vos données. Nous mettons en place des systèmes de rôles et permissions granulaires pour contrôler précisément les accès."
        }
      ]
    }
  ];

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              FAQ <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">No-Code</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Toutes les réponses à vos questions sur le no-code, l'automatisation et nos services
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Rechercher une question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-lg py-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredFAQ.length > 0 ? (
              <div className="space-y-12">
                {filteredFAQ.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                      <HelpCircle className="w-8 h-8 text-blue-600 mr-4" />
                      {category.category}
                    </h2>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((item) => (
                        <AccordionItem 
                          key={item.id} 
                          value={item.id}
                          className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 text-base leading-relaxed pt-4">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucune question trouvée pour "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Vous ne trouvez pas votre réponse ?
              </CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Notre équipe est là pour répondre à toutes vos questions spécifiques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  Contactez-nous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
