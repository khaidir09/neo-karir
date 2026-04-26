import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders main content first since showIntro is false initially', () => {
  render(<App />);
  const startButton = screen.getByText(/MULAI/i);
  expect(startButton).toBeInTheDocument();
});
