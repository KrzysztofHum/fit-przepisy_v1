export default function setupCategories(data) {
  const allCategories = {};
  data.forEach((item) => {
    item.categories.forEach((category) => {
      if (allCategories[category]) {
        allCategories[category] = allCategories[category] + 1;
      } else {
        allCategories[category] = 1;
      }
    });
  });

  const newCategories = Object.entries(allCategories).sort((a, b) => {
    const [firstCategory] = a;
    const [secondCategory] = b;
    return firstCategory.localeCompare(secondCategory);
  });


  return newCategories;
}
