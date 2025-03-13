import { render, screen } from "@testing-library/react";
import { Ingredients } from "./ingredients";

describe("<Ingredients />", () => {
  it("renders list of ingredients", () => {
    const ingredients = ["Ingredient 1", "Ingredient 2"];

    render(<Ingredients {...{ ingredients }} />);

    ingredients.forEach((ingredient) => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
  });
});
