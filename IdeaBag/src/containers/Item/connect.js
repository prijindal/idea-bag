import { connect } from 'react-redux';

const mapStateToProps = () => ({ });

const mapDispatchToProps = dispatch => ({
  toggleBookmark: (category, item) =>
    dispatch({
      type: 'DATA/BOOKMARK/TOGGLE',
      category,
      item,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
