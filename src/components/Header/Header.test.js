import { render, screen } from '@testing-library/react';
import Header from './Header';

test('should render text passed to title prop', () => {
  render(<Header title={'todo'} />);
  //  screen.debug()
  const linkElement = screen.getByText(/todo/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render text passed to title prop', () => {
  render(<Header title={'todo'} />);
  //  screen.debug()
  const linkElement = screen.getByRole("heading", { name: /todo/i});
  expect(linkElement).toBeInTheDocument();
});

test('should render text passed to title prop', () => {
  render(<Header title={'todo'} />);
  //  screen.debug()
  const linkElement = screen.getByTestId("header-test");
  expect(linkElement).toBeInTheDocument();
});

test('should find 1 headers', () => {
  render(<Header title={'todo'} />);
  //  screen.debug()
  const linkElement = screen.getAllByRole("heading");
  expect(linkElement.length).toBe(1);
});

// FIND BY
test('should render text passed to title prop', async () => {
  render(<Header title={'todo'} />);
  //  screen.debug()
  const linkElement = await screen.findByText(/todo/i);
  expect(linkElement).toBeInTheDocument();
});

// QUERY BY
test('should not have eeee header', async () => {
  render(<Header title={'todo'} />);
  //  screen.debug()
  const linkElement = screen.queryByText(/eeee/i);
  expect(linkElement).not.toBeInTheDocument();
});