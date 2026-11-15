-- Umutako Gift Boutik: run ONCE in the Supabase SQL Editor if you already ran the earlier setup.
-- 1) Product codes start with UMU- instead of APX- (existing products keep their codes).
-- 2) Removes the old furnishing categories, but only those with no products in them.
-- 3) Adds the six Umutako categories.

create or replace function public.set_product_code()
returns trigger language plpgsql security definer set search_path = public as $$
declare prefix text;
begin
  if new.product_code is null or btrim(new.product_code) = '' then
    select code_prefix into prefix from public.categories where id = new.category_id;
    new.product_code := 'UMU-' || coalesce(prefix, 'GEN') || '-' || lpad(nextval('public.product_code_seq')::text, 4, '0');
  else
    new.product_code := upper(btrim(new.product_code));
  end if;
  return new;
end $$;

delete from public.categories c
where c.slug in ('bedsheets', 'pillows', 'duvets', 'towels', 'decor', 'robes', 'bed-covers')
  and not exists (select 1 from public.products p where p.category_id = c.id);

-- Starter categories for Umutako Gift Boutik. Rename, add or remove them any time in the admin dashboard.
insert into public.categories (name, slug, code_prefix) values
  ('Custom Gifts',           'custom-gifts',          'CUS'),
  ('Door Hangers',           'door-hangers',          'DOR'),
  ('Welcome Gifts',          'welcome-gifts',         'WEL'),
  ('Baby & Pregnancy Gifts', 'baby-pregnancy-gifts',  'BAB'),
  ('Gift Sets for Her',      'gift-sets-for-her',     'HER'),
  ('Couple Packages',        'couple-packages',       'CPL')
on conflict (slug) do nothing;
