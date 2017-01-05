import { connect } from 'react-redux';

const mapStateToProps = () => ({ });

const mapStateToDispatch = dispatch => ({
  setText: url =>
    dispatch({
      type: 'DOWNLOADS/NEW',
      url,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
