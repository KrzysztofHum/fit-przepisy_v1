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
  result.data.allContentfulProducts.nodes.forEach((recipe) => {
    recipe.tags.forEach((tag) => {
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
//   result.data.allContentfulProducts.nodes.forEach((recipe) => {
//     recipe.categories.forEach((category) => {
//       //   const tagSlug = slugify(tag, { lower: true });
//       createPage({
//         path: `/przepis-nna-${category}`,
//         component: path.resolve(`src/templates/category-template.js`),
//         context: {
//           category: category,
//         },
//       });
//     });
//   });
};
