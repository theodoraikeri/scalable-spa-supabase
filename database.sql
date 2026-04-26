-- =========================
-- PRODUCTS TABLE
-- =========================

create table products (
  id uuid primary key default gen_random_uuid(),
  name text,
  description text,
  price numeric,
  category text,
  image_url text,
  stock_quantity int8
);

-- =========================
-- PROFILES TABLE
-- =========================

create table profiles (
  id uuid primary key,
  email text,
  role text default 'user'
);

-- =========================
-- PRODUCT DATA
-- =========================

insert into products (name, description, price, category, image_url, stock_quantity)
values
('Golden Halo Ring', 'A polished halo ring designed for everyday elegance.', 185, 'Rings', '', 10),
('Pearl Drop Earrings', 'Classic pearl drops with a modern silhouette.', 95, 'Earrings', '', 10),
('Satin Link Bracelet', 'Smooth link bracelet with a luxe finish.', 120, 'Bracelets', '', 10),
('Emerald Charm Necklace', 'Minimal chain necklace with an emerald-inspired charm.', 160, 'Necklaces', '', 10),
('Twist Band Ring', 'A simple twisted band that stacks beautifully.', 80, 'Rings', '', 10),
('Crystal Stud Earrings', 'Bright crystal studs for a clean, elevated look.', 60, 'Earrings', '', 10),
('Vintage Coin Bracelet', 'Coin-style bracelet inspired by vintage detailing.', 140, 'Bracelets', '', 10),
('Layered Chain Necklace', 'Two-layer chain necklace built for effortless styling.', 155, 'Necklaces', '', 10),
('Rose Gold Heart Ring', 'Rose gold-tone ring with a subtle heart accent.', 110, 'Rings', '', 10),
('Classic Hoop Earrings', 'Lightweight hoops perfect for casual or dressy looks.', 70, 'Earrings', '', 10);

