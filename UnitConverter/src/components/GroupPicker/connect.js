import { connect } from 'react-redux';

const mapStateToProps = ({ group }) => ({ group });

const mapStateToDispatch = dispatch => ({
  setGroup: group =>
    dispatch({
      type: 'GROUP/SET',
      group,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
