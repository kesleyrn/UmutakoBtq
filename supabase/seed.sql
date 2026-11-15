-- Starter categories for Umutako Gift Boutik. Rename, add or remove them any time in the admin dashboard.
insert into public.categories (name, slug, code_prefix) values
  ('Custom Gifts',           'custom-gifts',          'CUS'),
  ('Door Hangers',           'door-hangers',          'DOR'),
  ('Welcome Gifts',          'welcome-gifts',         'WEL'),
  ('Baby & Pregnancy Gifts', 'baby-pregnancy-gifts',  'BAB'),
  ('Gift Sets for Her',      'gift-sets-for-her',     'HER'),
  ('Couple Packages',        'couple-packages',       'CPL')
on conflict (slug) do nothing;
