import { BrowserRouter, Route, Routes } from "react-router";
import { RouteWithNavigation } from "../components/route-with-navigation/route-with-navigation";
import { FavouriteRecipesPage } from "../features/recipes/pages/favourite-recipes-page";
import { RecipePage } from "../features/recipes/pages/recipe-page";
import { RecipesPage } from "../features/recipes/pages/recipes-page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteWithNavigation />}>
          <Route index element={<RecipesPage />} />
          <Route path="/:pageId" element={<RecipePage />} />
          <Route path="/favourites" element={<FavouriteRecipesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
