// const path = require("path");
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     query GetRecipes {
//       allContentfulProducts {
//         nodes {
//           tags
//         }
//       }
//     }
//   `);
//   console.log(result);
//   result.data.AllContentfulProducts.nodes.forEach((recipe) => {
//     recipe.tags.forEach((tag) => {
//       createPage({
//         path: `/-przepis-na${tag}`,
//         component: path.resolve(`src/templates/tag-template.js`),
//         context: {
//           tag: tag,
//         },
//       });
//     });
//   });
// };
const path = require("path");
// const slugify = require("slugify");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulProducts {
        nodes {
          tags
          categories
        }
      }
    }
  `);
  result.data.allContentfulProducts.nodes.map((recipe) => {
    recipe.tags.map((tag) => {
      //   const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/przepis-na-${tag}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
  result.data.allContentfulProducts.nodes.map((recipe) => {
    recipe.categories.map((category) => {
      //   const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/przepis-na-${category}`,
        component: path.resolve(`src/templates/category-template.js`),
        context: {
          category: category,
        },
      });
    });
  });
};
