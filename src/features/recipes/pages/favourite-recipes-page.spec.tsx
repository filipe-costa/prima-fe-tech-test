import { render, screen } from "@testing-library/react";
import { RecipesGrid } from "../components/recipes-grid/recipes-grid";
import { useRecipe } from "../hooks/context/use-recipe";
import { FavouriteRecipesPage } from "./favourite-recipes-page";

vi.mock("../hooks/context/use-recipe");
vi.mock("../components/recipes-grid/recipes-grid");

const mockUseRecipe = vi.mocked(useRecipe);
vi.mocked(RecipesGrid).mockReturnValue(<>Recipes Grid</>);

describe("<FavouriteRecipesPage />", () => {
  it("renders 'You haven't favourited any recipes yet.' text", () => {
    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes: [],
    });
    render(<FavouriteRecipesPage />);

    expect(
      screen.getByText("You haven't favourited any recipes yet.")
    ).toBeInTheDocument();
  });

  it("renders 'Recipes Grid' text when there are favourite recipes", () => {
    mockUseRecipe.mockReturnValue({
      favourites: [
        {
          id: 1,
          name: "Test Recipe 1",
          imageUrl: "/",
          description: "Test Description 1",
          ingredients: [],
          instructions: [],
          preparationTime: 20,
        },
      ],
      toggleFavourite: vi.fn(),
      recipes: [],
    });

    render(<FavouriteRecipesPage />);

    expect(screen.getByText("Recipes Grid")).toBeInTheDocument();
  });
});
