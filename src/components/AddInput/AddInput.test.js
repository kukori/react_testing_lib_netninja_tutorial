import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from './AddInput';

const mockedSetTodo = jest.fn()

describe("AddInput", () => {
    it('should render input element', () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
        // screen.debug()
        const inputElement = screen.getByPlaceholderText(/Add a new task here../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
        // screen.debug()
        const inputElement = screen.getByPlaceholderText(/Add a new task here../i);

        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping"} })

        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it('should have empty input after clicking button', async () => {
        render(<AddInput setTodos={mockedSetTodo} todos={[]} />);
        // screen.debug()
        const inputElement = screen.getByPlaceholderText(/Add a new task here../i);    
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping"} })
        
        const buttonElement = screen.getByRole("button");

        fireEvent.click(buttonElement);

        expect(inputElement.value).toBe("");
    });
})