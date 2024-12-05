import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  let mockLogIn;

  beforeEach(() => {
    mockLogIn = jest.fn(); // Create a mock function
    render(<Login logIn={mockLogIn} />);
  });

  test("renders Login component without crashing", () => {
    const loginComponent = screen.getByTestId("Login");
    expect(loginComponent).toBeInTheDocument();
  });

  test("renders 2 input fields and 2 label tags", () => {
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("submit button is disabled by default", () => {
    const submitButton = screen.getByRole("button", { name: /login/i });
    expect(submitButton).toBeDisabled();
  });

  test("submit button is enabled after entering values in both inputs", () => {
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(submitButton).toBeEnabled();
  });

  test("login submission updates state", () => {
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    // Check that the mock logIn function was called with the correct arguments
    expect(mockLogIn).toHaveBeenCalledWith("test@example.com", "password123");
  });
});
