
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import PostsList from "@/components/admin/PostsList";
import PostEditor from "@/components/admin/PostEditor";
import { Post } from "@/types/blog";

const Admin = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const handleCreatePost = () => {
    setSelectedPost(null);
    setIsCreating(true);
    setActiveTab("editor");
  };

  const handleEditPost = (post: Post) => {
    setSelectedPost(post);
    setIsCreating(false);
    setActiveTab("editor");
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setIsCreating(false);
    setActiveTab("posts");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
          <Button onClick={handleCreatePost} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Nouveau Post
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="editor">
              {isCreating ? "Nouveau Post" : "Éditeur"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <PostsList onEditPost={handleEditPost} />
          </TabsContent>

          <TabsContent value="editor" className="mt-6">
            <PostEditor 
              post={selectedPost} 
              isCreating={isCreating}
              onBack={handleBackToList}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
