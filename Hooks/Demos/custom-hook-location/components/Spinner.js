const Spinner = (props) => {
  return <div>{props.message}</div>;
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
