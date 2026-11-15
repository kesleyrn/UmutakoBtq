import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { CategoryPills } from "@/components/shop/CategoryPills";
import { EmptyState } from "@/components/shop/EmptyState";
import { ShopFilters } from "@/components/shop/ShopFilters";
import { Pagination } from "@/components/ui/Pagination";
import { BUSINESS, PAGE_SIZE } from "@/lib/constants";
import { parseShopParams, shopHref } from "@/lib/shop";
import { getActiveCategories } from "@/services/categories";
import { getShopProducts } from "@/services/products";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const p = parseShopParams(await searchParams);
  const categories = p.category ? await getActiveCategories() : [];
  const name = categories.find((c) => c.slug === p.category)?.name;
  return {
    title: name ?? "Shop",
    description: `Browse ${name ? name.toLowerCase() : "gifts"} from ${BUSINESS.name}. Order on WhatsApp.`,
    alternates: { canonical: shopHref({ category: p.category }) },
    robots: p.q ? { index: false, follow: true } : undefined, // keep search result pages out of Google
  };
}

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const params = parseShopParams(await searchParams);
  const categories = await getActiveCategories();
  const active = categories.find((c) => c.slug === params.category);

  const { products, total, failed } = await getShopProducts({ categoryId: active?.id, q: params.q, sort: params.sort, page: params.page });
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  if (params.page > totalPages) redirect(shopHref({ ...params, category: active?.slug, page: totalPages }));

  const first = (params.page - 1) * PAGE_SIZE + 1;
  const filtered = Boolean(active || params.q);

  return (
    <main>
      <section className="border-b border-line bg-white py-12 sm:py-16">
        <Container>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">Our collection</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{active?.name ?? "Shop"}</h1>
          <p className="mt-3 max-w-xl text-charcoal-soft">Thoughtfully chosen gifts. Pick a product and order in minutes on WhatsApp.</p>
        </Container>
      </section>

      <Container className="py-10">
        <div className="space-y-5">
          <CategoryPills categories={categories} active={active?.slug} params={params} />
          <ShopFilters q={params.q} sort={params.sort} category={active?.slug} />
        </div>

        <p className="mb-6 mt-8 text-sm text-charcoal-soft" aria-live="polite">
          {total > 0 ? `Showing ${first}–${first + products.length - 1} of ${total} product${total === 1 ? "" : "s"}` : ""}
          {params.q && total > 0 ? ` for “${params.q}”` : ""}
        </p>

        {products.length > 0 ? (
          <>
            <ProductGrid products={products} />
            <Pagination page={params.page} totalPages={totalPages} hrefFor={(page) => shopHref({ ...params, category: active?.slug, page })} />
          </>
        ) : (
          <EmptyState filtered={filtered} failed={failed} />
        )}
      </Container>
    </main>
  );
}
