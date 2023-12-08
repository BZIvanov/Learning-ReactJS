const styles = {
  cursor: 'pointer',
  margin: '5px',
  border: '1px solid blue',
  padding: '5px',
};

const Person = ({ onPersonClick, name, age }) => (
  <p onClick={onPersonClick} style={styles}>
    Name: <b>{name}</b> ----- Age: <b>{age}</b>
  </p>
);

export default Person;
