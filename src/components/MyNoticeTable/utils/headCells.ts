interface HeadCell {
  id: keyof MyNoticeData;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'title',
    numeric: false,
    label: 'Title',
  },
  {
    id: 'category',
    numeric: false,
    label: 'Category',
  },
  {
    id: 'name',
    numeric: false,
    label: 'Name',
  },
  {
    id: 'breed',
    numeric: false,
    label: 'Breed',
  },
  {
    id: 'dateOfBirth',
    numeric: true,
    label: 'Date of Birth',
  },
  {
    id: 'location',
    numeric: false,
    label: 'Location',
  },
  {
    id: 'price',
    numeric: true,
    label: 'Price',
  },
];
