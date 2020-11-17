/**
 * Swaps two values within in an array.
 *
 * @param data
 * @param firstIndex
 * @param secondIndex
 */
const swap = (data: number[], firstIndex: number, secondIndex: number) => {
  return ([data[firstIndex], data[secondIndex]] = [
    data[secondIndex],
    data[firstIndex]
  ]);
};

export const bubbleSort = (data: number[]) => {
  if (data && data.length > 1) {
    for (let outerIndex = 0; outerIndex < data.length; outerIndex++) {
      for (let innerIndex = 0; innerIndex < data.length; innerIndex++) {
        if (data[innerIndex] > data[innerIndex + 1]) {
          swap(data, innerIndex, innerIndex + 1);
        }
      }
    }
  }
  return data;
};
