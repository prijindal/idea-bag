import { connect } from 'react-redux';

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = dispatch => ({
  setContacts: contacts =>
    dispatch({
      type: 'CONTACTS/SET',
      contacts,
    }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);
