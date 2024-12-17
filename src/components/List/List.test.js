import { render, screen, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom';
import List from "./List";

afterEach(() => {
    cleanup();
})

describe("Test List component", () => {
    const onDelete = jest.fn();
    const mockData = [
        { keyId: 1, text: "Task 1" },
        { keyId: 2, text: "Task 2" },
        { keyId: 3, text: "Task 3" },
    ];
    beforeEach(() => {
        render(<List onDelete={onDelete} data={mockData}/>)
    })

    test("list rendering", () => {
        const list = screen.getByTestId("list");
        expect(list).toBeInTheDocument();
    })

    test("renders all the items in the list", () => {
        mockData.forEach((item) => {
            expect(screen.getByText(item.text)).toBeInTheDocument();
        })
    })
})