import { pxToRem } from "@/utils/styles";
import { responsiveFontSizes } from "@/utils/ui";

const FONT_FAMILY = "Rajdhani";

export const typography = {
  fontFamily: FONT_FAMILY,
  h1: {
    fontSize: pxToRem(104),
    fontWeight: 600,
    ...responsiveFontSizes({ xs: 36, md: 70, lg: 104 }),
  },
};
