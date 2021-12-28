import { useState } from 'react';

const App = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [hasFormErrors, setHasFormErrors] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/[A-Za-z0-9]+@[a-z]+\.[a-z]+/.test(formValues.email)) {
      setHasFormErrors(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            id='confirmPassword'
            type='password'
            name='confirmPassword'
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <p>{hasFormErrors && 'Your email is invalid!'}</p>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
