import { connect } from 'react-redux';

const mapStateToProps = ({ amount }) => ({ amount });

const mapStateToDispatch = dispatch => ({
  setAmount: cost =>
    dispatch({
      type: 'COST/SET',
      cost,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
