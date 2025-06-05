
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, HelpCircle, Zap, Settings, BarChart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      icon: HelpCircle,
      title: "Général",
      questions: [
        {
          question: "Qu'est-ce que le no-code ?",
          answer: "Le no-code est une approche de développement qui permet de créer des applications sans écrire de code traditionnel. On utilise des interfaces visuelles et des outils de glisser-déposer pour construire des solutions digitales rapidement et efficacement."
        },
        {
          question: "Quels sont les avantages du no-code pour mon entreprise ?",
          answer: "Le no-code offre plusieurs avantages : développement plus rapide (jusqu'à 10x plus vite), coûts réduits, facilité de maintenance, possibilité de modifications en temps réel, et autonomie accrue pour vos équipes métier."
        },
        {
          question: "Le no-code est-il sécurisé ?",
          answer: "Oui, les plateformes no-code modernes respectent les standards de sécurité les plus élevés (GDPR, SOC 2, ISO 27001). Elles bénéficient des infrastructures sécurisées de leurs fournisseurs et sont régulièrement auditées."
        }
      ]
    },
    {
      icon: Zap,
      title: "Automatisation",
      questions: [
        {
          question: "Quels processus puis-je automatiser ?",
          answer: "Vous pouvez automatiser de nombreux processus : gestion des emails, synchronisation entre outils, création de rapports, workflow d'approbation, gestion des leads, facturation, suivi client, etc."
        },
        {
          question: "Combien de temps faut-il pour mettre en place une automatisation ?",
          answer: "Cela dépend de la complexité, mais la plupart des automatisations simples peuvent être mises en place en quelques heures ou jours. Les projets plus complexes prennent généralement 1 à 4 semaines."
        },
        {
          question: "Mes outils actuels peuvent-ils être connectés ?",
          answer: "La plupart des outils modernes disposent d'APIs qui permettent l'intégration. Nous travaillons avec plus de 5000 applications (CRM, ERP, outils marketing, comptabilité, etc.) via des plateformes comme Zapier, Make, ou des connexions directes."
        }
      ]
    },
    {
      icon: Settings,
      title: "Développement",
      questions: [
        {
          question: "Puis-je modifier l'application après sa création ?",
          answer: "Absolument ! C'est l'un des grands avantages du no-code. Vous pouvez facilement modifier l'interface, ajouter des fonctionnalités, ou adapter les workflows selon l'évolution de vos besoins."
        },
        {
          question: "Quelles sont les limites du no-code ?",
          answer: "Le no-code convient à 80% des besoins d'applications métier. Les limites concernent principalement les applications nécessitant des algorithmes très complexes, des performances extrêmes, ou des intégrations système très spécifiques."
        },
        {
          question: "Mes données sont-elles portables ?",
          answer: "Oui, nous veillons toujours à ce que vos données soient exportables. La plupart des plateformes no-code offrent des options d'export en CSV, JSON, ou via API pour garantir votre indépendance."
        }
      ]
    },
    {
      icon: BarChart,
      title: "Projets & Tarifs",
      questions: [
        {
          question: "Combien coûte un projet no-code ?",
          answer: "Les tarifs varient selon la complexité : automatisations simples (500-2000€), applications métier (3000-15000€), projets complexes (15000€+). Nous proposons toujours un devis gratuit après analyse de vos besoins."
        },
        {
          question: "Quelle est la durée d'un projet type ?",
          answer: "Les projets simples prennent 1-2 semaines, les applications métier 3-8 semaines, et les projets complexes 2-4 mois. Nous travaillons en mode agile avec des livrables réguliers."
        },
        {
          question: "Proposez-vous de la maintenance ?",
          answer: "Oui, nous proposons des contrats de maintenance incluant : support utilisateur, mises à jour, optimisations, corrections de bugs, et évolutions mineures. Différents niveaux de service sont disponibles."
        }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
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
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Rechercher dans la FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {filteredCategories.length === 0 ? (
              <div className="text-center py-16">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Aucun résultat trouvé</h3>
                <p className="text-gray-600">Essayez avec d'autres mots-clés ou consultez toutes nos questions.</p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <Card key={categoryIndex} className="border-0 shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-gray-900">{category.title}</CardTitle>
                          <CardDescription className="text-gray-600">
                            {category.questions.length} question{category.questions.length > 1 ? 's' : ''}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-gray-200">
                            <AccordionTrigger className="px-8 py-6 text-left hover:bg-gray-50 transition-colors">
                              <span className="font-semibold text-gray-900">{faq.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions spécifiques
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Nous contacter
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
