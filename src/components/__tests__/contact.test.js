import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load Contact Component", () => {
  render(<ContactUs />);

  const btn = screen.getByText("Submit");

  expect(btn).toBeInTheDocument();
});

test("Should show two input boxes", () => {
  render(<ContactUs />);
  const inputBox = screen.getAllByRole("textbox");

  expect(inputBox.length).toBe(2);
});
