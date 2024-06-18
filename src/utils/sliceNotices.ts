import { MAX_SHOWN_NOTICES } from "./constants/notices";

/**
 * Get only first specified pets
 * @param notices Notices
 * @returns  sliced array of pets
 */
export const sliceNotices = (notices: Notice[] | undefined) => {
  return notices?.slice(0, MAX_SHOWN_NOTICES) || [];
};
