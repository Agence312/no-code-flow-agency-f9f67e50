
export type Page = {
  id: string;
  title: string;
  slug: string;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  status: 'published' | 'draft';
  created_at: string;
  updated_at: string;
};
