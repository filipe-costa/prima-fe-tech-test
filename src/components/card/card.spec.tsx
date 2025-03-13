import { render, screen } from "@testing-library/react";
import { Card } from "./card";
import { CardImage } from "./card-image";
import { CardText } from "./card-text";
import { CardTitle } from "./card-title";

describe("<Card />", () => {
  it("renders with title 'Test Title'", () => {
    render(
      <Card>
        <CardTitle title="Test Title" />
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders with text 'Test Text'", () => {
    render(
      <Card>
        <CardText text="Test Text" />
      </Card>
    );

    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  it("renders an image with alt 'Test Image' text", () => {
    render(
      <Card>
        <CardImage alt="Test Image" url="/" />
      </Card>
    );

    expect(screen.getByAltText("Test Image")).toBeInTheDocument();
  });
});
