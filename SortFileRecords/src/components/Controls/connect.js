import { connect } from 'react-redux';

const mapStateTopProps = ({ directory }) => ({ directory });

const mapDispatchTopProps = (dispatch, { file }) => ({
  goBack: () =>
    dispatch({
      type: 'DIRECTORY/BACK',
    }),
});

export default connect(
  mapStateTopProps,
  mapDispatchTopProps,
);
