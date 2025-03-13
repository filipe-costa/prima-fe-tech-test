import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEvent, useCallback, useState } from "react";
import { SearchField } from "./search-field";

describe("<SearchField />", () => {
  it("changes value to 'Test Value'", async () => {
    const user = userEvent.setup();

    render(<TestComponent />);

    expect(screen.getByRole("textbox")).toHaveValue("");

    await user.type(screen.getByRole("textbox"), "Test Value");

    expect(screen.getByRole("textbox")).toHaveValue("Test Value");
  });
});

/**
 * Input is a controlled component - so we need to wrap it in order to testing it in isolation
 */
function TestComponent() {
  const [value, setValue] = useState("");
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    [setValue]
  );

  return <SearchField value={value} onChange={onChange} />;
}
