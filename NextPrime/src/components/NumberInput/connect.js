import { connect } from 'react-redux';

const mapStateToProps = ({ amount }) => ({ amount });

const mapStateToDispatch = dispatch => ({
  setAmount: number =>
    dispatch({
      type: 'NUMBER/SET',
      number,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
