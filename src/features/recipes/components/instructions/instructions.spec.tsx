import { render, screen } from "@testing-library/react";
import { Instructions } from "./instructions";

describe("<Instructions />", () => {
  it("renders list of instructions", () => {
    const instructions = ["Instructions 1", "Instructions 2"];

    render(<Instructions {...{ instructions }} />);

    instructions.forEach((instruction) => {
      expect(screen.getByText(instruction)).toBeInTheDocument();
    });
  });
});
