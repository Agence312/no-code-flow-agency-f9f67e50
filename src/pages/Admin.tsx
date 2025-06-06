
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import PostsList from "@/components/admin/PostsList";
import PostEditor from "@/components/admin/PostEditor";
import PagesList from "@/components/admin/PagesList";
import PageEditor from "@/components/admin/PageEditor";
import { Post } from "@/types/blog";
import { Page } from "@/types/page";

const Admin = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [isCreatingPage, setIsCreatingPage] = useState(false);

  const handleCreatePost = () => {
    setSelectedPost(null);
    setIsCreatingPost(true);
    setActiveTab("editor");
  };

  const handleEditPost = (post: Post) => {
    setSelectedPost(post);
    setIsCreatingPost(false);
    setActiveTab("editor");
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    setIsCreatingPost(false);
    setActiveTab("posts");
  };

  const handleCreatePage = () => {
    setSelectedPage(null);
    setIsCreatingPage(true);
    setActiveTab("page-editor");
  };

  const handleEditPage = (page: Page) => {
    setSelectedPage(page);
    setIsCreatingPage(false);
    setActiveTab("page-editor");
  };

  const handleBackToPagesList = () => {
    setSelectedPage(null);
    setIsCreatingPage(false);
    setActiveTab("pages");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Administration</h1>
          {activeTab === "posts" || activeTab === "editor" ? (
            <Button onClick={handleCreatePost} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Nouveau Post
            </Button>
          ) : (
            <Button onClick={handleCreatePage} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Nouvelle Page
            </Button>
          )}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="editor">
              {isCreatingPost ? "Nouveau Post" : "Éditeur Post"}
            </TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="page-editor">
              {isCreatingPage ? "Nouvelle Page" : "Éditeur Page"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <PostsList onEditPost={handleEditPost} />
          </TabsContent>

          <TabsContent value="editor" className="mt-6">
            <PostEditor 
              post={selectedPost} 
              isCreating={isCreatingPost}
              onBack={handleBackToList}
            />
          </TabsContent>
          
          <TabsContent value="pages" className="mt-6">
            <PagesList onEditPage={handleEditPage} />
          </TabsContent>

          <TabsContent value="page-editor" className="mt-6">
            <PageEditor 
              page={selectedPage} 
              isCreating={isCreatingPage}
              onBack={handleBackToPagesList}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
