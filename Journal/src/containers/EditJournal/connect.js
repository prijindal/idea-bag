import { connect } from 'react-redux';

const mapStateToProps = (state, props) => ({
  content: state.journals.filter(journal => journal.id === props.id)[0].content,
  title: 'Edit Journal',
});

const mapDispatchToProps = (dispatch, props) => ({
  saveItem: content =>
    dispatch({
      type: 'JOURNAL/EDIT',
      content,
      id: props.id,
    }),
  onChangeText: () => {},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
