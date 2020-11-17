import { bubbleSort } from "./BubbleSort";

describe("bubbleSort", () => {
  it("Sorts a number array", () => {
    expect(bubbleSort([1, 3, 45, 5, 6, 7, 8])).toStrictEqual([
      1,
      3,
      5,
      6,
      7,
      8,
      45
    ]);
  });

  it("Handles empty array", () => {
    expect(bubbleSort([])).toStrictEqual([]);
  });

  it("Handles string", () => {
    expect(bubbleSort(["2", 45, 5, 6, "3", 7, 8])).toStrictEqual([
      "2",
      "3",
      5,
      6,
      7,
      8,
      45
    ]);
  });

  it("Handles decimals, zero, and negative values", () => {
    expect(bubbleSort([0, 45, 5, -2, -4.7678, -123, 45])).toStrictEqual([
      -123,
      -4.7678,
      -2,
      0,
      5,
      45,
      45
    ]);
  });

  it("Handles array with one value", () => {
    expect(bubbleSort([45])).toStrictEqual([45]);
  });

  it("Handles array with two value", () => {
    expect(bubbleSort([45, 30])).toStrictEqual([30, 45]);
  });
});
