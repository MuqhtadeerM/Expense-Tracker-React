import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { GlobalContext } from "../context";
import TransactionForm from "../components/add-transaction";

const defaultContext = {
  formData: { description: "", amount: "", type: "" },
  setFormData: vi.fn(),
  value: "",
  setValue: vi.fn(),
  handleFormSubmit: vi.fn(),
};

export const FormData = (overrides = {}) => {
  const mockContext = { ...defaultContext, ...overrides };
  return render(
    <GlobalContext.Provider value={mockContext}>
      <TransactionForm isOpen={true} onClose={() => {}} />
    </GlobalContext.Provider>
  );
};

describe("Testing Using RTL", () => {
  test("Testing add transaction", () => {
    FormData();

    //   checking the text on the screen
    expect(screen.getByText(/Add New Transaction/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/enter amount/i)).toBeInTheDocument();

    //   testing button
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
  });
});


