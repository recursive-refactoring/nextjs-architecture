import { ARRAY_INDEX } from "@/constants/array";

export const convertCurrentCaseToTitleCase = (
  str: any,
  split = "-",
): string => {
  return str
    ?.split?.(split)
    ?.map?.(
      (word: string) =>
        word?.charAt?.(ARRAY_INDEX?.ZERO)?.toUpperCase?.() +
        word?.slice?.(ARRAY_INDEX?.ONE),
    )
    ?.join?.(" ");
};
