# My Shopify Portfolio

A portfolio website built with **React**, **TypeScript**, and **TailwindCSS**, integrated with the **Shopify Storefront API** to display real-time products from a Shopify store.

## 🚀 Tech Stack
- **React 19 + TypeScript** – Modern, strongly typed UI.
- **TailwindCSS** – Fast, responsive, professional styling.
- **Shopify Storefront API** – Product data fetching via GraphQL.
- **Vite** – Lightning-fast development and build tool.

## 📦 Features
- Dynamic product listing from Shopify.
- Fully responsive design for all devices.
- Optimized image loading.
- Simple and clear navigation with Navbar and Footer.
- Easily extendable for product detail pages.

## ⚙️ Environment Variables
Create a `.env` file at the root of the project with:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_API_TOKEN=your-api-token
VITE_SHOPIFY_API_VERSION=2023-04
```

## 🛠 Installation & Development
```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment
This project is ready to be deployed to **Vercel** or **Netlify**.  
Just connect your repository and set the environment variables in the platform’s settings.
