import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title "React Demo..."', () => {
  render(<App />);
  const title = screen.getByText(/React Demo: Todo List/i);
  expect(title).toBeInTheDocument();
});
