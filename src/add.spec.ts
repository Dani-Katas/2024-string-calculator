import { describe, expect, it } from "vitest"
import { add } from "./add.js"

describe("add", () => {
  describe("iteration 1", () => {
    it("returns zero when empty string", () => {
      const numbers = ""

      const result = add(numbers)

      expect(result).toBe(0)
    })

    it("returns the number when one number", () => {
      const numbers = "1"

      const result = add(numbers)

      expect(result).toBe(1)
    })

    it("returns the sum of two numbers", () => {
      const numbers = "1,2"

      const result = add(numbers)

      expect(result).toBe(3)
    })
  })

  describe("iteration 2", () => {
    it("sums an arbitrary amount of numbers", () => {
      const numbers = "1,2,3,4,5"

      const result = add(numbers)

      expect(result).toBe(15)
    })
  })

  describe("iteration 3", () => {
    it("admits a new line separator", () => {
      const numbers = "1\n2,3"

      const result = add(numbers)

      expect(result).toBe(6)
    })
  })

  describe("iteration 4", () => {
    it("support different delimiters", () => {
      const numbers = "//;\n1;2"

      const result = add(numbers)

      expect(result).toBe(3)
    })

    it("support different delimiters and admits a new line separator", () => {
      const numbers = "//;\n1;2\n3"

      const result = add(numbers)

      expect(result).toBe(3)
    })
  })
})
