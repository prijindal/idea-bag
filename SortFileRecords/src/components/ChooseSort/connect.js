import { connect } from 'react-redux';

const mapStateTopProps = ({ sortby }) => ({ sortby });

const mapDispatchTopProps = dispatch => ({
  setSortBy: sortby =>
    dispatch({
      type: 'SORTYBY/SET',
      sortby,
    }),
});

export default connect(
  mapStateTopProps,
  mapDispatchTopProps,
);
