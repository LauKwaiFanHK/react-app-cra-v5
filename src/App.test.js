import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe("Tip calculator app", () => {

  test('renders page title', () => {
    render(<App />);
    const pageTitle = screen.getByText(/tip calculator/i);
    expect(pageTitle).toBeInTheDocument();
  });

  test('renders reset button', () => {
    render(<App />);
    const text = screen.getByText(/reset/i);
    expect(text).toBeInTheDocument();
  });
});
