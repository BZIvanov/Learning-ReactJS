const ulStyles = {
  padding: '0',
  listStyleType: 'none',
};

const liStyles = {
  margin: '3px',
  padding: '5px',
  border: '1px solid orange',
  cursor: 'pointer',
};

const StoredResults = ({ results, deleteResult }) => {
  return (
    <ul style={ulStyles}>
      {results.map((result) => (
        <li
          style={liStyles}
          key={result.id}
          onClick={() => deleteResult(result.id)}
        >
          {result.value}
        </li>
      ))}
    </ul>
  );
};

export default StoredResults;
