import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => (
    <BrowserRouter>
        <Todo />
    </BrowserRouter>
);

describe("Todo", () => {
    it('should render inputted todo', () => {
        render(<MockTodo />);
        // screen.debug()
        const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping"} })
        
        const buttonElement = screen.getByRole("button");

        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Go Grocery Shopping/i)

        expect(divElement).toBeInTheDocument();
    });

    it('should render multiple inputted todos', () => {
        render(<MockTodo />);

        const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping"} })
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);

        fireEvent.change(inputElement, { target: { value: "Pet The Cat"} })
        fireEvent.click(buttonElement);

        const divElements = screen.getAllByTestId("task-container-test")

        expect(divElements.length).toBe(2);
    });

    it('should should inactivate todo', async () => {
        render(<MockTodo />);
        // screen.debug()
        const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping"} })
        
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);

        const divElement = screen.getByText(/Go Grocery Shopping/i)
        fireEvent.click(divElement);

        expect(divElement).toHaveClass("todo-item-active");
    });
})