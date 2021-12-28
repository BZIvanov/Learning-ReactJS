import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    // console.log('Before each test for this describe block');
    render(<App />);
  });

  describe('Initial render', () => {
    test('renders all the input elements with empty values', () => {
      // getByRole is prefered option to select elements, because this is what the end user sees. For example getById should be last thing to try after id is not something visible to the end user
      const emailInputEl = screen.getByRole('textbox');
      const passwordInputEl = screen.getByLabelText(/^password/i);
      const confirmPasswordInputEl = screen.getByLabelText(/confirm password/i);

      expect(emailInputEl.value).toBe('');
      expect(passwordInputEl.value).toBe('');
      expect(confirmPasswordInputEl.value).toBe('');
    });
  });

  describe('Type in the inputs', () => {
    test('type text in the email text field', () => {
      // with the second option parameter we can select specific textbox by name in case we have multiple
      const emailInputEl = screen.getByRole('textbox', { name: /email/i });
      userEvent.type(emailInputEl, 'iva@mail.com');
      expect(emailInputEl.value).toBe('iva@mail.com');
    });

    test('type text in the password text field', () => {
      const passwordInputEl = screen.getByLabelText(/^password/i);
      userEvent.type(passwordInputEl, '12345');
      expect(passwordInputEl.value).toBe('12345');
      expect(passwordInputEl.value).not.toBe('');
    });
  });

  describe('Error handling', () => {
    test('show error message in case of invalid email', () => {
      // here we use queryBy not getBy, because getBy throws an error and the test will fail if the element is not found
      // read more here: https://testing-library.com/docs/queries/about
      const emailErrorEl = screen.queryByText(/email is invalid/i);

      expect(emailErrorEl).not.toBeInTheDocument();

      const emailInputEl = screen.getByRole('textbox', { name: /email/i });
      userEvent.type(emailInputEl, 'ivamail.com');

      const submitButtonEl = screen.getByRole('button', { name: /submit/i });
      userEvent.click(submitButtonEl);

      // here we query again, because the first variable we use has value of null
      const emailErrorRequeryEl = screen.queryByText(/email is invalid/i);

      expect(emailErrorRequeryEl).toBeInTheDocument();
    });
  });
});
