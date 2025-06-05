
import { Post } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";

interface BlogPostTemplateProps {
  post: Post;
}

const BlogPostTemplate = ({ post }: BlogPostTemplateProps) => {
  // Calculer le temps de lecture estimé (environ 200 mots par minute)
  const readingTime = Math.max(1, Math.ceil(post.content.replace(/<[^>]*>/g, '').split(' ').length / 200));

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header de l'article */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>
        
        {post.excerpt && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {post.excerpt}
          </p>
        )}
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-6 border-b">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="font-medium">{post.author_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{post.published_at ? new Date(post.published_at).toLocaleDateString('fr-FR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }) : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{readingTime} min de lecture</span>
          </div>
        </div>
      </header>

      {/* Image à la une */}
      {post.featured_image && (
        <div className="mb-8">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      )}

      {/* Contenu de l'article */}
      <div 
        className="prose prose-lg prose-gray max-w-none
          prose-headings:font-bold prose-headings:text-gray-900
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
          prose-ul:my-6 prose-li:my-2
          prose-strong:text-gray-900 prose-strong:font-semibold
          prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Footer de l'article */}
      <footer className="mt-12 pt-8 border-t">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{post.author_name}</h3>
              <p className="text-gray-600">Expert en transformation digitale et solutions no-code</p>
              {post.author_email && (
                <p className="text-sm text-gray-500 mt-1">{post.author_email}</p>
              )}
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default BlogPostTemplate;
