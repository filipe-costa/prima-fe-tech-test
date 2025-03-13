import { ReactNode, useCallback, useMemo, useState } from "react";
import { default as hardcodedRecipes } from "../../recipes.ts";
import { RecipeListType, RecipeType } from "../../types.ts";
import { RecipeContext } from "./recipe-context";

/**
 * Use context to share state between recipes, recipe, and favourites page
 */
export const RecipeProvider = ({ children }: { children: ReactNode }) => {
  const [recipes] = useState<RecipeListType>(hardcodedRecipes);
  const [favourites, setFavourites] = useState<RecipeListType>([]);

  const toggleFavourite = useCallback((recipe: RecipeType) => {
    setFavourites((value) =>
      isFavourite(recipe, value)
        ? removeFavourite(recipe, value)
        : addFavourite(recipe, value)
    );
  }, []);

  const value = useMemo(
    () => ({
      recipes,
      favourites,
      toggleFavourite,
    }),
    [favourites, recipes, toggleFavourite]
  );

  return (
    <RecipeContext.Provider value={value}>{children} </RecipeContext.Provider>
  );
};

const isFavourite = (recipe: RecipeType, favourites: RecipeListType) =>
  favourites.find((favourite) => favourite.id === recipe.id);

const removeFavourite = (recipe: RecipeType, favourites: RecipeListType) => {
  return favourites.filter((f) => f.id !== recipe.id);
};

const addFavourite = (recipe: RecipeType, favourites: RecipeListType) => {
  const newFavourites = [...favourites];
  newFavourites.push({ ...recipe, isLiked: true });
  return newFavourites;
};
