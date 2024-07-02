type Type = {
  id: number;
  label: string;
  sort: string;
  sortType: SortType;
};

export const getSortTypes = (category: string) => {
  const types: Type[] = [
    {
      id: 1,
      label: 'From new to old',
      sort: 'createdAt',
      sortType: 'DESC',
    },
    {
      id: 2,
      label: 'From old to new',
      sort: 'createdAt',
      sortType: 'ASC',
    },
    {
      id: 3,
      label: 'By name descending',
      sort: 'name',
      sortType: 'DESC',
    },
    {
      id: 4,
      label: 'By name ascending',
      sort: 'name',
      sortType: 'ASC',
    },
  ];

  if (category === 'sell') {
    types.push(
      {
        id: 5,
        label: 'From low to high price',
        sort: 'price',
        sortType: 'ASC',
      },
      {
        id: 6,
        label: 'From high to low price',
        sort: 'price',
        sortType: 'DESC',
      },
    );
  }

  return types;
};
