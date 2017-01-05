import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapStateToDispatch = (dispatch, { download: { id } }) => ({
  setProgress: progress =>
    dispatch({
      type: 'DOWNLOAD/PROGRESS',
      id,
      progress,
    }),
  setCompleted: path =>
    dispatch({
      type: 'DOWNLOAD/COMPLETE',
      id,
      path,
    }),
  setAbort: () =>
    dispatch({
      type: 'DOWNLOAD/ABORT',
      id,
    }),
});

export default connect(
  mapStateToProps,
  mapStateToDispatch,
);
