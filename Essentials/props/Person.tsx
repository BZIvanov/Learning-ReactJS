interface PersonProps {
  firstName: string;
  lastName: string;
}

const Person = (props: PersonProps) => {
  return (
    <p>
      Hello {props.firstName} {props.lastName}!
    </p>
  );
};

export default Person;
