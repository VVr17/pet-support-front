// @mui
import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

type ReturnType = boolean;

type Query = 'up' | 'down' | 'between' | 'only';

type Value = Breakpoint | number;

/**
 * Custom hook for responsive design using Material-UI breakpoints.
 * Determines if the current viewport matches the specified breakpoint(s).
 *
 * @param query - Type of media query ("up", "down", "between", "only").
 * @param start - Starting breakpoint or number (used for "up", "down", and "between").
 * @param end - Ending breakpoint or number (used for "between").
 * @returns Boolean indicating whether the current viewport matches the query.
 */
export default function useResponsive(
  query: Query,
  start?: Value,
  end?: Value,
): ReturnType {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Value));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Value));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start as Value, end as Value),
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}
