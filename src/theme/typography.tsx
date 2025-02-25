import { pxToRem } from "@/utils/styles";
import { responsiveFontSizes } from "@/utils/ui";

const FONT_FAMILY = "DM_Sans";

export const typography = {
  fontFamily: FONT_FAMILY,
  fontWeightNormal: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  fontWeightBlack: 900,
  h1: {
    fontSize: pxToRem(104),
    ...responsiveFontSizes({ xs: 36, md: 70, lg: 104 }),
  },
  body2: {
    fontSize: pxToRem(14),
  },
};
