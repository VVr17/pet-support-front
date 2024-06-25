export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

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
