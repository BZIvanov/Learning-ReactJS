import { render, fireEvent } from '@testing-library/react';
import Counter from '../';

let component;
beforeEach(() => {
  component = render(<Counter />);
});

test('expect counter component to render with correct header', () => {
  const headerEl = component.getByTestId('header');
  expect(headerEl.textContent).toBe('My Awesome App');
});

test('expect initial result to be 0', () => {
  const resultEl = component.getByTestId('result');
  expect(resultEl.textContent).toBe('0');
});

test('expect counter to start at 0', () => {
  const inputEl = component.getByTestId('counter');
  expect(inputEl.value).toBe('1');
});

test('change input value', () => {
  const inputEl = component.getByTestId('counter');

  expect(inputEl.value).toBe('1');
  fireEvent.change(inputEl, { target: { value: '5' } });
  expect(inputEl.value).toBe('5');
});

test('click increase should increase the result by 1', () => {
  const increaseBtn = component.getByText('increase');
  const resultEl = component.getByTestId('result');

  fireEvent.click(increaseBtn);
  expect(resultEl.textContent).toBe('1');
});

test('change input value to 10 and click decrease', () => {
  const inputEl = component.getByTestId('counter');
  const decreaseBtn = component.getByText('decrease');
  const resultEl = component.getByTestId('result');

  fireEvent.change(inputEl, { target: { value: '10' } });
  fireEvent.click(decreaseBtn);
  expect(resultEl.textContent).toBe('-10');
});

test('should not have class name for value 0', () => {
  const resultEl = component.getByTestId('result');

  expect(resultEl.className).toBe('gray');
});

test('should have class name green for value > 100', () => {
  const inputEl = component.getByTestId('counter');
  const increaseBtn = component.getByText('increase');
  const resultEl = component.getByTestId('result');

  fireEvent.change(inputEl, { target: { value: '80' } });
  fireEvent.click(increaseBtn);
  fireEvent.click(increaseBtn);

  expect(resultEl.className).toBe('green');
});
