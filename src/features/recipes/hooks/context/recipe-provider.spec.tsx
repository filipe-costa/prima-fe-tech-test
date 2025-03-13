import { act, renderHook } from "@testing-library/react";

import { RecipeProvider } from "./recipe-provider";
import { useRecipe } from "./use-recipe";

describe("<RecipeProvider />", () => {
  it("returns empty list of favourites", () => {
    const { result } = renderHook(() => useRecipe(), {
      wrapper: RecipeProvider,
    });

    expect(result.current.favourites).toHaveLength(0);
  });

  it("returns list of recipes with 5 elements", () => {
    const { result } = renderHook(() => useRecipe(), {
      wrapper: RecipeProvider,
    });

    expect(result.current.recipes).toHaveLength(5);
  });

  it("it toggles recipe", () => {
    const { result } = renderHook(() => useRecipe(), {
      wrapper: RecipeProvider,
    });

    expect(result.current.favourites).toHaveLength(0);

    const recipe = result.current.recipes[0];
    const expectedFavourite = { ...recipe, isLiked: true };

    // Add recipe
    act(() => {
      result.current.toggleFavourite(recipe);
    });

    expect(result.current.favourites).toHaveLength(1);
    expect(result.current.favourites[0]).toEqual(expectedFavourite);

    // remove recipe
    act(() => {
      result.current.toggleFavourite(recipe);
    });

    expect(result.current.favourites).toHaveLength(0);
  });
});
