export type PersonProps = {
  person: {
    name: string;
    age: number;
  };
};

const Person = ({ person }: PersonProps) => {
  return (
    <div>
      <h1>{person.name}</h1>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default Person;
