export const GET_PRODUCTS = `
  query getProducts($numProducts: Int!) {
    products(first: $numProducts) {
      edges {
        node {
          id
          title
          description
          images(first: 1) {
            edges {
              node {
                altText
                transformedSrc(maxWidth: 500, maxHeight: 500)
              }
            }
          }
        }
      }
    }
  }
`;
