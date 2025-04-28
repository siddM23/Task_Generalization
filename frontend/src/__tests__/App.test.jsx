import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders YouTube Summarizer heading', () => {
  render(<App />);
  const heading = screen.getByText(/YouTube Comments Summarizer/i);
  expect(heading).toBeInTheDocument();
});
