import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
  
});
test('renders learn react link', () => {
  render(<App />);

  const linkElement2 = screen.getByTestId("comp");
  expect(linkElement2).toBeInTheDocument("Hello World");

});
test('renders learn react link', () => {
  render(<App />);

  const linkElement = screen.getByTestId("task3");
  expect(linkElement).toBeInTheDocument("first item");

});
