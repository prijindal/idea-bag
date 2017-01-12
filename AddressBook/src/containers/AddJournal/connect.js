import { connect } from 'react-redux';

const mapStateToProps = () => ({
  title: 'New Journal',
});

const mapDispatchToProps = dispatch => ({
  saveItem: content =>
    dispatch({
      type: 'JOURNAL/ADD',
      content,
    }),
  onChangeText: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
