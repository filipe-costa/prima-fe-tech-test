import { useContext } from "react";
import { RecipeContext } from "./recipe-context";

export const useRecipe = () => {
  return useContext(RecipeContext);
};
