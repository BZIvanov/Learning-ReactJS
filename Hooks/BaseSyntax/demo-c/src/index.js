import ReactDOM from 'react-dom';

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

  return (
    <article>
      <img src={url} alt='person' />
      <h3>
        {name} is a {job}
      </h3>
      {children}
    </article>
  );
};

const PersonList = () => {
  return (
    <section>
      <Person img='33' name='Toni' job='Developer' />
      <hr />
      <Person img='22' name='Ivo' job='Designer'>
        <p>
          HTML between component tags goes to children prop in the component.
        </p>
      </Person>
      <hr />
      <Person img='51' name='Mitko' job='Manager' />
    </section>
  );
};

ReactDOM.render(<PersonList />, document.getElementById('root'));
