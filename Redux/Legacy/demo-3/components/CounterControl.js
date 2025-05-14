const styles = {
  margin: '10px',
  cursor: 'pointer',
};

const CounterControl = (props) => (
  <button style={styles} onClick={props.clicked}>
    {props.label}
  </button>
);

export default CounterControl;
