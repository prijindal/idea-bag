import { connect } from 'react-redux';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  signIn: email =>
    dispatch({
      type: 'EMAIL/SET',
      email,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
