
import { Post } from "@/types/blog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // Calculer le temps de lecture estimé
  const readingTime = Math.max(1, Math.ceil(post.content.replace(/<[^>]*>/g, '').split(' ').length / 200));

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg group h-full flex flex-col">
      {post.featured_image && (
        <div className="overflow-hidden rounded-t-lg">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader className="flex-grow">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author_name}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.published_at ? new Date(post.published_at).toLocaleDateString('fr-FR') : ''}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {readingTime} min
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
        {post.excerpt && (
          <CardDescription className="text-gray-600 line-clamp-3 mt-2">
            {post.excerpt}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link to={`/blog/${post.slug}`}>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group-hover:shadow-lg transition-all">
            Lire l'article
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
