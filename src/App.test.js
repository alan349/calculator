import { render, screen } from '@testing-library/react';
import App from './App';

test('renders correctly', () => {
  render(<App />);

  expect(screen.getByLabelText('Número 1')).toBeInTheDocument();
  expect(screen.getByLabelText('Número 2')).toBeInTheDocument();
  expect(screen.getByText('Somar')).toBeInTheDocument();
});
