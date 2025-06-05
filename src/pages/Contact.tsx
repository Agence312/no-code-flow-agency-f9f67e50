
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    timeline: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons dans les 24h.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      timeline: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Parlons de votre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                projet
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prêt à transformer votre entreprise ? Contactez-nous pour un échange gratuit sur vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                    Parlez-nous de votre projet
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Plus vous nous en direz, mieux nous pourrons vous conseiller
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Votre nom"
                          required
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email professionnel *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="votre@email.com"
                          required
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise
                        </label>
                        <Input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="Nom de votre entreprise"
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Téléphone
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+33 1 23 45 67 89"
                          className="border-2 border-gray-200 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service d'intérêt
                        </label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automation">Automatisation & Intégration</SelectItem>
                            <SelectItem value="nocode">Développement No-Code</SelectItem>
                            <SelectItem value="optimization">Optimisation des Processus</SelectItem>
                            <SelectItem value="dashboard">Tableaux de Bord & BI</SelectItem>
                            <SelectItem value="consulting">Consulting & Formation</SelectItem>
                            <SelectItem value="other">Autre / Je ne sais pas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget estimé
                        </label>
                        <Select value={formData.budget} onValueChange={(value) => handleChange("budget", value)}>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                            <SelectValue placeholder="Sélectionnez une fourchette" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Moins de 5 000€</SelectItem>
                            <SelectItem value="5k-15k">5 000€ - 15 000€</SelectItem>
                            <SelectItem value="15k-50k">15 000€ - 50 000€</SelectItem>
                            <SelectItem value="over-50k">Plus de 50 000€</SelectItem>
                            <SelectItem value="unknown">À définir ensemble</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Délai souhaité
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange("timeline", value)}>
                        <SelectTrigger className="border-2 border-gray-200 focus:border-blue-500">
                          <SelectValue placeholder="Quand souhaitez-vous démarrer ?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">Dès que possible</SelectItem>
                          <SelectItem value="1month">Dans le mois</SelectItem>
                          <SelectItem value="3months">Dans les 3 mois</SelectItem>
                          <SelectItem value="6months">D'ici 6 mois</SelectItem>
                          <SelectItem value="planning">En phase de réflexion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Décrivez votre projet *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Décrivez vos besoins, vos défis actuels, vos objectifs..."
                        rows={6}
                        required
                        className="border-2 border-gray-200 focus:border-blue-500"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contact@nocode-agency.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Téléphone</p>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Adresse</p>
                      <p className="text-gray-600">123 Rue de la Tech<br />75001 Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Horaires</p>
                      <p className="text-gray-600">Lun - Ven : 9h - 18h<br />Support 24h/7j</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Besoin d'une réponse rapide ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Planifiez un appel de 30 minutes avec notre équipe
                  </p>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Réserver un créneau
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
