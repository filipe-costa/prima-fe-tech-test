import { render, screen } from "@testing-library/react";
import { InitialEntry, MemoryRouter, Route, Routes } from "react-router";
import { useRecipe } from "../hooks/context/use-recipe";
import { RecipePage } from "./recipe-page";

vi.mock("../hooks/context/use-recipe");

const mockUseRecipe = vi.mocked(useRecipe);

describe("<RecipePage />", () => {
  const recipes = [
    {
      id: 1,
      name: "Test Recipe 1",
      imageUrl: "/",
      description: "Test Description 1",
      ingredients: ["Salt"],
      instructions: ["Boil the spaghetti in salted water until al dente."],
      preparationTime: 20,
    },
  ];

  it("shows recipe details when found", () => {
    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    const validRoute = "/1";
    render(<TestRouter initialEntries={[validRoute]} />);

    expect(screen.getByText(recipes[0].name)).toBeInTheDocument();
    expect(screen.getByText(recipes[0].description)).toBeInTheDocument();
    expect(
      screen.getByText(
        `Preparation time: ${recipes[0].preparationTime} minutes.`
      )
    ).toBeInTheDocument();
  });

  it("shows 'No recipe found.' text when route paremeter is invalid", () => {
    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    const invalidRoute = "/null";
    render(<TestRouter initialEntries={[invalidRoute]} />);

    expect(screen.getByText("No recipe found.")).toBeInTheDocument();
  });

  it("shows 'No recipe found.' text when route paremeter is valid but recipe does not exist", () => {
    mockUseRecipe.mockReturnValue({
      favourites: [],
      toggleFavourite: vi.fn(),
      recipes,
    });

    const notFoundRecipeRoute = "/2";
    render(<TestRouter initialEntries={[notFoundRecipeRoute]} />);

    expect(screen.getByText("No recipe found.")).toBeInTheDocument();
  });
});

const TestRouter = ({
  initialEntries,
}: {
  initialEntries?: InitialEntry[];
}) => {
  return (
    <MemoryRouter {...{ initialEntries }}>
      <Routes>
        <Route path="/:pageId" element={<RecipePage />} />
      </Routes>
    </MemoryRouter>
  );
};
