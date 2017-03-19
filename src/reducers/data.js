const itemCategoryHelper = (item, action) => {
  if (item.id === action.item) {
    return {
      ...item,
      bookmark: !item.bookmark,
    };
  }
  return item;
};

const bookmarkCategoryHelper = (category, action) => {
  if (category.categoryLbl === action.category) {
    return Object.assign({}, category, {
      items: category.items.map(item => itemCategoryHelper(item, action)),
    });
  }
  return category;
};

const data = (state = [], action) => {
  switch (action.type) {
    case 'DATA/INIT':
      return action.data;
    case 'DATA/BOOKMARK/TOGGLE':
      return state.map(item => bookmarkCategoryHelper(item, action));
    default:
      return state;
  }
};

export default data;
