import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../components/button";

describe("button text conditional rendering", () => {
    test("button text equals 'Sign in' if loading is false", () => {
        const mockProps = {
            buttonName: "Sign in",
            buttonLoading: "Signing in...",
            loading: false,
        };

        render(<Button {...mockProps} />);
        expect(screen.getByRole("button")).toHaveTextContent(mockProps.buttonName);
    });
    test("button text equals 'Signing in...' if loading is true", () => {
        const mockProps = {
            buttonName: "Sign in",
            buttonLoading: "Signing in...",
            loading: true,
        };

        render(<Button {...mockProps} />);
        expect(screen.getByRole("button")).toHaveTextContent(mockProps.buttonLoading);
    });
});
