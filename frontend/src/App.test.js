import { render, screen } from '@testing-library/react';
import App from './App';
import APIfetch from './APIfetch';

test('renders learn react link', () => {
  render(<App />);
  render(<APIfetch />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
