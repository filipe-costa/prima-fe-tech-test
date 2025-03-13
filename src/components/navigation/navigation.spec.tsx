import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Navigation } from "./navigation";

describe("<Navigation />", () => {
  it.each([
    ["Recipes", "/"],
    ["Favourites", "/favourites"],
  ])("renders navigation link '%s' with url '%s'", (name, url) => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name })).toHaveAttribute("href", url);
  });
});
