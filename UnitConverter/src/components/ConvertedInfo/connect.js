import { connect } from 'react-redux';

const mapStateToProps = ({
  group,
  from,
  to,
  value,
}) => ({
  group,
  from,
  to,
  value,
});

export default connect(mapStateToProps);
