import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { GlobalContext } from "../context";
import Main from "../components/main";

vi.mock("react-apexcharts");
const mockContext = {
  totalIncome: 0,
  totalExpense: 0,
  setTotalIncome: vi.fn(),
  setTotalExpense: vi.fn(),
  allTransactions: [
    { description: "Salary", amount: "5000", type: "income" },
    { description: "Gloceries", amount: "1000", type: "expense" },
  ],

  formData: { description: "", amount: "", type: "" },
  setFormData: vi.fn(),
  value: "",
  setValue: vi.fn(),
  handleFormSubmit: vi.fn(),
};

describe("Testing the Main component", () => {
  test("testing the items on screen", () => {
    render(
      <GlobalContext.Provider value={mockContext}>
        <Main />
      </GlobalContext.Provider>
    );
    expect(screen.getByText("Salary")).toBeInTheDocument();
    expect(screen.getByText("Add New Transaction")).toBeInTheDocument();
  });
});
