export const radioGroupStyles = {
  "& .MuiFormControlLabel-root": {
    paddingY: { xs: "13px", md: "17px" },
    paddingX: "16px",
    marginX: "0px",
    borderRadius: "8px",
    "& .MuiRadio-root": {
      padding: "0px",
      marginRight: { xs: "12px", md: "16px" }
    },
    ":not(:last-child)": {
      marginBottom: { xs: "16px", md: "24px" }
    },
    "& .MuiFormControlLabel-label": {
      flex: "1 1 0%",
      display: "flex",
      justifyContent: "space-between",
      "& .MuiTypography-root": {
        fontSize: { xs: "1rem", md: "1.125rem" },
        fontWeight: "600",
        "&:first-of-type": {
          fontWeight: "700",
        }
      }
    }
  }
}