import { render, screen, act } from '@testing-library/react';
import App from './App';
import { UserProvider } from './UserContext';

test('renders application starting without intro video (skipped for test/dev config)', () => {
  render(
    <UserProvider>
      <App />
    </UserProvider>
  );
  const buttonElement = screen.getByText(/MULAI/i);
  expect(buttonElement).toBeInTheDocument();
});
