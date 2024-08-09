import { render, screen } from "@testing-library/react";
import App from "./App";

test("Hello Its my react starter in app", async () => {
	render(<App />);
	const hello = screen.getByText("Hello Its my react starter");
	expect(hello).toBeInTheDocument();
});
