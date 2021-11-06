import { useEffect, useState } from 'react';

const RegisterModalForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (name && email && password) {
      setIsFormValid(true);
    } else {
      setErrors({
        ...(!name && { name: 'Name is invalid' }),
        ...(!email && { email: 'Email is invalid' }),
        ...(!password && { password: 'Password is invalid' }),
      });
    }
  }, [name, email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button disabled={!isFormValid}>Submit</button>
      </form>
    </div>
  );
};

export default RegisterModalForm;
