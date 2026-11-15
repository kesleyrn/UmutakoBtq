import { createPublicClient } from "@/lib/supabase/public";
import type { Category } from "@/types";

/** Active categories, in the order they were created. */
export async function getActiveCategories(): Promise<Pick<Category, "id" | "name" | "slug" | "image_url">[]> {
  try {
    const { data, error } = await createPublicClient()
      .from("categories").select("id, name, slug, image_url, created_at").eq("is_active", true).order("created_at").order("name");
    if (error) throw new Error(error.message);
    return (data ?? []).map(({ id, name, slug, image_url }) => ({ id, name, slug, image_url }));
  } catch (e) {
    console.error("[categories] could not load:", e instanceof Error ? e.message : e);
    return [];
  }
}
