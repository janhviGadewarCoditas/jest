import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import Item from "./Item";

afterEach(() => {
    cleanup();
});

describe("Test Item component", () => {
    const onDelete = jest.fn();

    beforeEach(() => {
        render(<Item name="Task 1" onDelete={onDelete} />);
    });

    test("item component rendering", () => {
        const item = screen.getByTestId("item");
        expect(item).toBeInTheDocument();
    });

    test("task rendering", () => {
        const task = screen.getByTestId("task");
        expect(task).toHaveTextContent("Task 1");
    });

    test("button rendering", () => {
        const button = screen.getByTestId("button");
        expect(button).toBeInTheDocument();
    });

    test("button has correct text", () => {
        const button = screen.getByTestId("button");
        expect(button).toHaveTextContent("Delete");
    });
});
