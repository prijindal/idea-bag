import { connect } from 'react-redux';

const selectItem = (data, category, item) => {
  data = data.filter(cat => cat.categoryLbl === category.categoryLbl); // eslint-disable-line
  if (data.length > 0) {
    const items = data[0].items.filter(el => el.id === item.id);
    if (items.length > 0) {
      return items[0];
    }
  }
  return { bookmark: false };
};

const mapStateToProps = (
  { data },
  { navigation: { state: { params: { category, item } } } },
) => ({ item: selectItem(data, category, item) });

const mapDispatchToProps = (
  dispatch,
  { navigation: { state: { params: { category, item } } } },
) => ({
  toggleBookmark: () =>
    dispatch({
      type: 'DATA/BOOKMARK/TOGGLE',
      category: category.categoryLbl,
      item: item.id,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
