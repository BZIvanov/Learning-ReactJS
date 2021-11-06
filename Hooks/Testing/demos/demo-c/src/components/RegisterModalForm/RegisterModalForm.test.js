import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { RegisterModalForm } from './';

afterEach(cleanup);

test('Should have correct form title', async () => {
  render(<RegisterModalForm />);
  const text = await screen.findByText('Register Form');

  expect(text).toBeInTheDocument();
});

test('Should be initially empty form', async () => {
  render(<RegisterModalForm />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const emailInput = screen.queryByPlaceholderText('Email');
  const passwordInput = screen.queryByPlaceholderText('Password');

  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveValue('');
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveValue('');
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveValue('');
});

test('Submit button should be initially disabled', async () => {
  render(<RegisterModalForm />);
  const submitButton = screen.getByText('Submit');

  expect(submitButton).toBeDisabled();
});

test('Submit button should not be disabled if all inputs are fileld', async () => {
  render(<RegisterModalForm />);
  const nameInput = screen.queryByPlaceholderText('Name');
  const emailInput = screen.queryByPlaceholderText('Email');
  const passwordInput = screen.queryByPlaceholderText('Password');
  const submitButton = screen.getByText('Submit');

  fireEvent.change(nameInput, { target: { value: 'Iva' } });
  fireEvent.change(emailInput, { target: { value: 'iva@mail.bg' } });
  fireEvent.change(passwordInput, { target: { value: '12345678' } });

  expect(submitButton).not.toBeDisabled();
});

test('Should display error message for empty name', async () => {
  render(<RegisterModalForm />);
  const emailInput = screen.queryByPlaceholderText('Email');
  const nameInputError = screen.getByText('Name is invalid');
  const emailInputError = screen.queryByPlaceholderText('Email is invalid');

  fireEvent.change(emailInput, { target: { value: 'iva@mail.bg' } });

  expect(nameInputError).toBeInTheDocument();
  expect(emailInputError).not.toBeInTheDocument();
});
