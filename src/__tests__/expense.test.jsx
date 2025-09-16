import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ExpenseView from "../components/expense-view";

const mockData = [
  { description: "Salary", amount: "5000" },
  { description: "Freelance", amount: "1200" },
];

describe("testing expense view component", () => {
  test("testing the income on screen", () => {
    render(<ExpenseView type="income" data={mockData} />);

    expect(screen.getByText("Income")).toBeInTheDocument();
    expect(screen.getByText("Salary")).toBeInTheDocument();
    expect(screen.getByText("Freelance")).toBeInTheDocument();
  });

  test("testing expenses", () => {
    const expenses = [
      { description: "Gloceries", amount: 200 },
      { description: "Rent", amount: 2000 },
    ];
    render(<ExpenseView type="expense" data={expenses} />);

    expect(screen.getByText("Gloceries")).toBeInTheDocument();
    expect(screen.getByText("Rent")).toBeInTheDocument();
  });

  test("")
});
