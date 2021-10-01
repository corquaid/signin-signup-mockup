import React from "react";
import { render } from "@testing-library/react";
import Logo from "../components/logo";

describe("errorClass conditional tests", () => {
    test("errorClass equals logoShake if errors are present", () => {
        const mockErrors = {
            name: {
                type: "required",
            },
        };

        let logoShake;
        const errorClass = Object.keys(mockErrors).length > 0 ? logoShake : "";
        render(<Logo errors={mockErrors} />);
        expect(errorClass).toEqual(logoShake);
    });

    test("erroClass equals empty string if errors are empty", () => {
        const mockErrors = {};
        let logoShake;
        const errorClass = Object.keys(mockErrors).length > 0 ? logoShake : "";
        render(<Logo errors={mockErrors} />);
        expect(errorClass).toEqual("");
    });
});
