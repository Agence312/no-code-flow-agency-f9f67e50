
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Post } from "@/types/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPostTemplate from "@/components/blog/BlogPostTemplate";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        console.error('Error fetching post:', error);
        throw error;
      }

      return data as Post;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="text-xl">Chargement de l'article...</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">L'article que vous recherchez n'existe pas ou n'est plus disponible.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 w-4 h-4" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Navigation */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <Link to="/blog">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Retour au blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Contenu de l'article avec le nouveau template */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <BlogPostTemplate post={post} />
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Besoin d'aide pour votre transformation digitale ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Nos experts vous accompagnent dans la mise en place de solutions no-code adaptées à votre entreprise
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="text-blue-600 hover:text-blue-700">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
