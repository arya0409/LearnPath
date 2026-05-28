import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learnpath text', () => {
  render(<App />);
  const linkElement = screen.getByText(/LearnPath/i);
  expect(linkElement).toBeInTheDocument();
});
