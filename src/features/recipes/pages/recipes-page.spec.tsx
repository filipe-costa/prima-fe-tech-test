import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { useRecipe } from "../hooks/context/use-recipe";
import { RecipesPage } from "./recipes-page";

vi.mock("../hooks/context/use-recipe");

const mockUseRecipe = vi.mocked(useRecipe);

describe("<RecipesPage />", () => {
  const recipes = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      imageUrl: "/",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g Parmesan cheese",
        "Black pepper",
        "Salt",
        "1 clove garlic (optional)",
      ],
      instructions: [],
      preparationTime: 20,
    },
    {
      id: 2,
      name: "Chicken Curry",
      imageUrl: "/",
      description:
        "A flavorful chicken curry cooked with aromatic spices and coconut milk.",
      ingredients: [
        "500g chicken breast",
        "1 onion",
        "2 cloves garlic",
        "1 tbsp curry powder",
        "1 tsp turmeric",
        "400ml coconut milk",
        "1 tomato",
        "Pepper",
        "1 tbsp oil",
      ],
      instructions: [],
      preparationTime: 30,
    },
    {
      id: 3,
      name: "Avocado Toast",
      imageUrl: "/",
      description:
        "A simple and nutritious breakfast with mashed avocado on toasted bread.",
      ingredients: [
        "1 ripe avocado",
        "2 slices sourdough bread",
        "1/2 lemon",
        "1 egg",
        "Salt",
        "Black pepper",
        "Chili flakes (optional)",
      ],
      instructions: [],
      preparationTime: 10,
    },
  ];

  it('shows "No recipes found." text when no recipes', () => {
    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes: [],
    });

    render(<TestPageWithRouter />);

    expect(screen.getByText("No recipes found.")).toBeInTheDocument();
  });

  it('shows "No recipes found." text when filtered recipes do not match search term', async () => {
    const user = userEvent.setup();

    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    render(<TestPageWithRouter />);

    await user.type(screen.getByRole("textbox"), "Test Value");

    expect(screen.getByText("No recipes found.")).toBeInTheDocument();
  });

  it("shows all recipes when textbox is empty", () => {
    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    render(<TestPageWithRouter />);

    expect(screen.getByRole("textbox")).toHaveDisplayValue("");
  });

  it("shows all recipes when textbox value is less than 3 characters long", async () => {
    const expectedRecipes = [
      "Spaghetti Carbonara",
      "Chicken Curry",
      "Avocado Toast",
    ];
    const user = userEvent.setup();

    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    render(<TestPageWithRouter />);

    await user.type(screen.getByRole("textbox"), "00");

    expect(screen.getByRole("textbox")).toHaveDisplayValue("00");

    expectedRecipes.forEach((recipe) => {
      expect(screen.getByText(recipe)).toBeInTheDocument();
    });
  });

  it.each([
    ["name", "Chicken Curry", ["Chicken Curry"]],
    ["description", "avocado", ["Avocado Toast"]],
    [
      "ingredients",
      "pepper",
      ["Spaghetti Carbonara", "Chicken Curry", "Avocado Toast"],
    ],
    [
      "multiple search terms (name, ingredient)",
      "Carbonara egg",
      ["Spaghetti Carbonara", "Avocado Toast"],
    ],
  ])("shows recipes filtered by %s", async (_, text, expectedValues) => {
    const user = userEvent.setup();

    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    render(<TestPageWithRouter />);

    await user.type(screen.getByRole("textbox"), text);

    expectedValues.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});

const TestPageWithRouter = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<RecipesPage />} />
      </Routes>
    </MemoryRouter>
  );
};
