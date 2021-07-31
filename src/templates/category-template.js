// import React from "react";

// import Layout from "../components/Layout";
// import Recipe from "../components/Recipe";

// export default function CategoryTemplate({ data, pageContext }) {
//   const recipes = data.allContentfulProducts.nodes;
//   return (
//     <Layout>
//       <h2>{pageContext.category}</h2>
//       <div>
//         <Recipe recipes={recipes} />
//       </div>
//     </Layout>
//   );
// }

// export const query = graphql`
//   query GetRecipeByCategory($category: String) {
//     allContentfulProducts(
//       sort: { fields: title, order: ASC }
//       filter: { category: { eq: $category } }
//     ) {
//       nodes {
//         carbs
//         fat
//         id
//         kcal
//         protein
//         description {
//           raw
//         }
//         title
//         img {
//           gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
//         }
//       }
//     }
//   }
// `;
