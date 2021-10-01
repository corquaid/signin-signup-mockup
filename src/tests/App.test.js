import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

describe("App component", () => {
    test("it renders App component correctly", () => {
        render(<App />);
        expect(screen.getByRole("heading")).toBeInTheDocument();
    });
});
