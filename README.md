# Gems & Jewels Boutique (React + Supabase)

## Overview
This is a scalable single-page application (SPA) built with React and Supabase. The app allows users to browse jewelry products, create accounts, and access role-based features.

## Features
- User authentication (Sign up, Login, Logout)
- Dynamic product display from Supabase
- Customer profile page
- Admin dashboard with CRUD functionality
  - Add products
  - Edit products
  - Delete products
- Role-based access control (Admin vs User)
- Deployed on Google Cloud Platform (Compute Engine)

## Tech Stack
- React (Vite)
- Supabase (Database + Auth)
- Google Cloud Platform (Compute Engine)
- Apache Web Server

## Live Site
http://34.133.34.247/jewelry-app/

## Database Tables
### Products
- id (uuid)
- name (text)
- description (text)
- price (numeric)
- category (text)
- image_url (text)
- stock_quantity (int)

### Profiles
- id (uuid)
- email (text)
- role (text)

## How to Run Locally
```bash
npm install
npm run dev
