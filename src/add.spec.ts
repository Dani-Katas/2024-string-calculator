import { describe, expect, it } from "vitest";
import { add } from "./add.js";

describe("add", () => {
  it("returns zero when empty string", () => {
    const numbers = ""

    const result: number = add(numbers)

    expect(result).toBe(0)
  })

  it("returns the number when one number", () => {
    const numbers = "1"

    const result: number = add(numbers)

    expect(result).toBe(1)
  })

  it.todo("returns the sum of two numbers")
})
