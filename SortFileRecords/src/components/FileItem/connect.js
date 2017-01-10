import { connect } from 'react-redux';

const mapStateTopProps = () => ({ });

const mapDispatchTopProps = (dispatch, { file }) => ({
  setDirectory: () => {
    console.log(file);
    if (file.isFile()) {
      // Is a file
    } else {
      dispatch({
        type: 'DIRECTORY/SET',
        directory: file.path,
      });
    }
  },
});

export default connect(
  mapStateTopProps,
  mapDispatchTopProps,
);
