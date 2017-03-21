import { connect } from 'react-redux';

const mapStateToProps = ({ amount }) => ({ amount });

const mapStateToDispatch = dispatch => ({
  setAmount: amount =>
    dispatch({
      type: 'AMOUNT/SET',
      amount,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
