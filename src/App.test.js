import { render, screen, act } from '@testing-library/react';
import App from './App';

test('renders video intro first', () => {
  render(<App />);
  const videoElement = document.querySelector('video');
  expect(videoElement).toBeInTheDocument();
});
