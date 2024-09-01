import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home', () => {
  render(
    <App />
  );
  const linkElement = screen.getByText(/Catálogo de flores/i);
  expect(linkElement).toBeInTheDocument();
});