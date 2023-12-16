// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import Enzyme from 'enzyme'; // 3.11.0
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'; // 0.6.5

Enzyme.configure({ adapter: new Adapter() });
