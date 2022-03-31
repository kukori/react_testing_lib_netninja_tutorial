import { render, screen } from '@testing-library/react';
import TodoFooter from './TodoFooter';
import { BrowserRouter } from "react-router-dom";

const MockTodoHeader = ({numberOfIncompleteTasks}) => (
    <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
);

it('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoHeader numberOfIncompleteTasks={5} />);
    // screen.debug()
    const paragraphElement = screen.getByText(/5 tasks/i);
    expect(paragraphElement).toBeInTheDocument();
});

test('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoHeader numberOfIncompleteTasks={1} />);
    // screen.debug()
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeVisible();
});

test('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoHeader numberOfIncompleteTasks={1} />);
    // screen.debug()
    const paragraphElement = screen.getByTestId("footer-paragraph");
    expect(paragraphElement.textContent).toBe("1 task left");
});
