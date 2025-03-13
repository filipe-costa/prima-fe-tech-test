import { render, screen } from "@testing-library/react";
import { NotFound } from "./not-found";

describe("<NotFound />", () => {
  it('renders "Not Found" message', () => {
    render(<NotFound message="Not Found" />);

    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
