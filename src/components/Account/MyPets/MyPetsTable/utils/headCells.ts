interface HeadCell {
  id: keyof MyPetData;
  label: string;
  numeric: boolean;
}

export const headCells: readonly HeadCell[] = [
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
    id: 'comments',
    numeric: false,
    label: 'Comments',
  },
];
