import { createContext } from "react";
import { RecipeListType, RecipeType } from "../../types";

type RecipeContextType = {
  recipes: RecipeListType;
  favourites: RecipeListType;
  toggleFavourite: (recipe: RecipeType) => void;
};

export const RecipeContext = createContext<RecipeContextType>({
  recipes: [],
  favourites: [],
  toggleFavourite: () => {
    /** noop */
  },
});
