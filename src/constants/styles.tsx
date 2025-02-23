import { pxToRem } from "@/utils/styles";
import { AVATAR_VARIANTS } from "./ui";

export const ONE_REM_TO_PX: number = 16;

export const AVATAR_VARIANTS_BORDER_RADIUS = {
  [AVATAR_VARIANTS?.CIRCULAR]: "50%",
  [AVATAR_VARIANTS?.ROUNDED]: pxToRem(4),
  [AVATAR_VARIANTS?.SQUARE]: pxToRem(1),
};
