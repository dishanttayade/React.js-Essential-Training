import { render } from "@testing-library/react";
import React from "react";
import App6 from "./App6";

test("renders h1", () => {
    const { getByText } = render(<App6 />);
    const h1 = getByText(/Hello, This is App testing./);
    expect(h1).toHaveTextContent(
        "Hello, This is App testing."
    );
});