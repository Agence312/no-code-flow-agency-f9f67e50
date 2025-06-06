
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Page } from "@/types/page";
import { ArrowLeft } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  slug: z.string().min(3, "Le slug doit contenir au moins 3 caractères").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Format de slug invalide"),
  content: z.string().min(10, "Le contenu doit contenir au moins 10 caractères"),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  status: z.enum(["published", "draft"]),
});

interface PageEditorProps {
  page: Page | null;
  isCreating: boolean;
  onBack: () => void;
}

type FormValues = z.infer<typeof formSchema>;

const PageEditor = ({ page, isCreating, onBack }: PageEditorProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      meta_title: "",
      meta_description: "",
      status: "draft",
    },
  });

  useEffect(() => {
    if (page) {
      form.reset({
        title: page.title,
        slug: page.slug,
        content: page.content,
        meta_title: page.meta_title || "",
        meta_description: page.meta_description || "",
        status: page.status,
      });
    } else {
      form.reset({
        title: "",
        slug: "",
        content: "",
        meta_title: "",
        meta_description: "",
        status: "draft",
      });
    }
  }, [page, form]);

  // Auto-generate slug from title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    form.setValue("title", title);
    
    if (isCreating || !page) {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      
      form.setValue("slug", slug);
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      if (isCreating) {
        const { error } = await supabase.from("pages" as any).insert({
          title: data.title,
          slug: data.slug,
          content: data.content,
          meta_title: data.meta_title || null,
          meta_description: data.meta_description || null,
          status: data.status,
        });

        if (error) throw error;

        toast({
          title: "Page créée",
          description: "La page a été créée avec succès.",
        });
      } else {
        const { error } = await supabase
          .from("pages" as any)
          .update({
            title: data.title,
            slug: data.slug,
            content: data.content,
            meta_title: data.meta_title || null,
            meta_description: data.meta_description || null,
            status: data.status,
            updated_at: new Date().toISOString(),
          })
          .eq("id", page?.id);

        if (error) throw error;

        toast({
          title: "Page mise à jour",
          description: "La page a été mise à jour avec succès.",
        });
      }

      queryClient.invalidateQueries({ queryKey: ["admin-pages"] });
      onBack();
    } catch (error) {
      console.error("Error saving page:", error);
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue lors de l'enregistrement de la page.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="sm"
          className="mr-4"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour
        </Button>
        <h2 className="text-xl font-semibold">
          {isCreating ? "Créer une nouvelle page" : "Modifier la page"}
        </h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={handleTitleChange}
                      placeholder="Titre de la page"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="slug-de-la-page"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contenu</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Contenu de la page..."
                    className="min-h-[300px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="meta_title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Titre (SEO)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Titre pour les moteurs de recherche"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="meta_description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Meta Description (SEO)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Description pour les moteurs de recherche"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statut</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez le statut" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="draft">Brouillon</SelectItem>
                    <SelectItem value="published">Publié</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              className="px-8"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Enregistrement..." : "Enregistrer"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PageEditor;
