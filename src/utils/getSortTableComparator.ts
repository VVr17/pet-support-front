/**
 * Compares two values of type T based on a specified property for descending order.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @param orderBy - The property of type T to compare by.
 * @returns -1 if b[orderBy] is less than a[orderBy], 1 if b[orderBy] is greater than a[orderBy], or 0 if they are equal.
 */
export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

/**
 * Returns a comparator function based on order (ascending or descending) and a specified property.
 *
 * @param order - The order of sorting ('asc' for ascending, 'desc' for descending).
 * @param orderBy - The property to sort by.
 * @returns A comparator function that compares two objects based on the specified order and property.
 */
export const getComparator =
  <Key extends keyof any>(order: 'asc' | 'desc', orderBy: Key) =>
  (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ): number => {
    return order === 'desc'
      ? descendingComparator(a, b, orderBy)
      : -descendingComparator(a, b, orderBy);
  };
