import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router";
import { RecipesGrid } from "./recipes-grid";

describe("<RecipesGrid />", () => {
  const testRecipes = [
    {
      id: 1,
      name: "Test Recipe 1",
      imageUrl: "/",
      description: "Test Description 1",
      ingredients: [],
      instructions: [],
      preparationTime: 20,
    },
    {
      id: 2,
      name: "Test Recipe 2",
      imageUrl: "/",
      description: "Test Description 2",
      ingredients: [],
      instructions: [],
      preparationTime: 20,
    },
    {
      id: 3,
      name: "Test Recipe 3",
      imageUrl: "/",
      description: "Test Description 3",
      ingredients: [],
      instructions: [],
      preparationTime: 20,
    },
  ];

  it("renders recipes", () => {
    const mockToggleFavourite = vi.fn();

    render(
      <BrowserRouter>
        <RecipesGrid
          recipes={testRecipes}
          toggleFavourite={mockToggleFavourite}
        />
      </BrowserRouter>
    );

    testRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe.name)).toBeInTheDocument();
      expect(screen.getByText(recipe.description)).toBeInTheDocument();
    });
  });

  it("toggles favourite when clicked", async () => {
    const user = userEvent.setup();

    const mockToggleFavourite = vi.fn();

    render(
      <BrowserRouter>
        <RecipesGrid
          recipes={testRecipes}
          toggleFavourite={mockToggleFavourite}
        />
      </BrowserRouter>
    );

    const firstButton = screen.getAllByRole("button")[0];

    await user.click(firstButton);

    expect(mockToggleFavourite).toHaveBeenCalledWith(testRecipes[0]);
  });
});
