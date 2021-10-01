import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SignIn from "../pages/sign-in";

describe("SignIn page testing", () => {
    it("should render the basic fields", () => {
        render(<SignIn />);
        expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
    });
});

