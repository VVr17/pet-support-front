// ----------------------------------------------------------------------

import { palette } from "./palette";

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:600px)": { fontSize: pxToRem(sm) },
    "@media (min-width:900px)": { fontSize: pxToRem(md) },
    "@media (min-width:1200px)": { fontSize: pxToRem(lg) },
  };
}

// ----------------------------------------------------------------------
const FONT_PRIMARY = "Public Sans, sans-serif"; // Google Font

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    color: palette.text.primary,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    color: palette.text.primary,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    color: palette.text.primary,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    color: palette.text.primary,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    color: palette.text.primary,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    color: palette.text.primary,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  button: {
    color: palette.text.secondary,
    fontWeight: 600,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
  },
};
