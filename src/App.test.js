import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";

afterEach(() => {
    cleanup();
})

describe("test App component", () => {

    test("should render dashboard component", () => {
        render(<App/>)
        const dashboard = screen.getByTestId("dashboard");
        expect(dashboard).toBeInTheDocument();
    })

})