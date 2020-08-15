import React from 'react';
import ReactDom from 'react-dom';

function People() {
  const friends = [
    { name: 'john', job: 'developer', age: 23, company: 'apple' },
    { name: 'bob', job: 'designer', age: 21, company: 'facebook' },
    { name: 'susy', job: 'artist', age: 26, company: 'google' },
  ];

  return (
    <section>
      <Person person={friends[0]}>
        <div>
          <h1>some heading</h1>
          <p>some info about </p>
        </div>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = (props) => {
  const { name, job, age, company } = props.person;
  const { children } = props;

  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.getElementById('root'));
