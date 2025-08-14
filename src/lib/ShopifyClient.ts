// src/ShopifyClient.ts
const SHOPIFY_DOMAIN = "leos-portfolio.myshopify.com";
const STOREFRONT_ACCESS_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_API_TOKEN; // .env

export async function shopifyFetch(query: string, variables: Record<string, any> = {}) {
  const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2025-01/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Shopify API error");
  }
  return json.data;
}
