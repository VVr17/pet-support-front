export const tableStyles = {
  minWidth: { xs: 260, md: 400 },
  width: "100%",
  color: "text.secondary",
};

export const rowStyles = {
  "&:last-child td, &:last-child th": { border: 0 },
  "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
};

export const rowNameStyles = { py: 1, fontWeight: 600, fontSize: "1rem" };
export const rowValueStyles = { py: 1, fontSize: "1rem" };
