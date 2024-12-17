import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Dashboard from "./Dashboard";

afterEach(() => {
    cleanup()
})

describe("Dashboard component", () => {
    beforeEach(() => {
        render(<Dashboard />)
    })

    test("match snapsot", () => {

        expect(screen).toMatchSnapshot();
    })``

    test("dashboard rendering", () => {
        const dashboard = screen.getByTestId("dashboard");
        expect(dashboard).toBeInTheDocument();
    })

    test("should render input and button elements", () => {
        const input = screen.getByPlaceholderText("Type your task");
        const button = screen.getByTestId("button");

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    test("should add a todo item when the form is submitted", () => {
        const input = screen.getByPlaceholderText("Type your task");
        const button = screen.getByTestId("button");

        fireEvent.change(input, {target: {value: "New Task"}});
        fireEvent.click(button);

        const newtask = screen.getByText("New Task");
        expect(newtask).toBeInTheDocument();
    })

    test("should not add a todo item when input is empty", () => {
        const button = screen.getByTestId("button");
        fireEvent.click(button);

        const newtask = screen.queryByText("New Task");
        expect(newtask).not.toBeInTheDocument();
    })

    test("should delete a todo item when delete button is clicked", () => {
        const input = screen.getByPlaceholderText("Type your task");
        const button = screen.getByTestId("button");

        fireEvent.change(input, {target: {value: "task to delete"}});
        fireEvent.click(button);

        const tasktodel = screen.getByText("task to delete");
        expect(tasktodel).toBeInTheDocument();

        const deletebtn = screen.getByRole("button", {name: /delete/i});
        fireEvent.click(deletebtn);

        expect(screen.queryByText("task to delete")).not.toBeInTheDocument();
    })

})