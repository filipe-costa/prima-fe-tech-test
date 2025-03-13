import { ReactNode } from "react";
import { RecipeProvider } from "../features/recipes/hooks/context/recipe-provider";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <RecipeProvider>{children} </RecipeProvider>;
};
