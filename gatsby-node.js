const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulProducts {
        nodes {
          title
          tags
          categories
        }
      }
    }
  `);
  result.data.allContentfulProducts.nodes.map((recipe) => {
    recipe.tags.map((tag) => {
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
      createPage({
        path: `/przepis-na-${category}`,
        component: path.resolve(`src/templates/category-template.js`),
        context: {
          category: category,
        },
      });
    });
  });
  result.data.allContentfulProducts.nodes.map((recipe) => {
    const { categories, title } = recipe;
    const tagSlug = slugify(title, { lower: true });

    createPage({
      path: `/przepis-na-${categories[0]}/przepis-na-${tagSlug}`,
      component: path.resolve(`src/templates/product-template.js`),
      content: {
        title: title,
      },
    });
  });
};
