import { DATA_TYPES } from "@/constants/data-types";
import { AVATAR_VARIANTS } from "@/constants/ui";
import { generateImage } from "@/utils/avatars";
import { pxToRem } from "@/utils/styles";
import { Avatar, Typography } from "@mui/material";
import { DynamicAvatarPropsI } from "../Avatars.interface";
import { CustomCommonTooltip } from "@/components/data-displays/custom-common-tooltip";

export const DynamicAvatar = (props: DynamicAvatarPropsI) => {
  const {
    nameInitial,
    avatarSrc,
    tooltipTitle,
    customTooltipProps,
    backgroundColor = "primary.main",
    customStyles,
    padding,
    initialColor = "grey.800",
    nameInitialsSize = 14,
    width = 28,
    height = 28,
    variant = AVATAR_VARIANTS?.CIRCULAR,
  } = props;

  const nameInitialSize: number =
    typeof height === DATA_TYPES?.STRING
      ? nameInitialsSize
      : (((height as number) / 3) as number);

  return (
    <CustomCommonTooltip title={tooltipTitle} isCapital {...customTooltipProps}>
      <Avatar
        sx={{
          backgroundColor,
          width: width,
          height: height,
          padding,
          ...customStyles,
        }}
        variant={variant}
        src={generateImage(avatarSrc)}
        alt={nameInitial}
      >
        {!!nameInitial && (
          <Typography
            sx={{
              fontSize: pxToRem(nameInitialSize),
              color: initialColor,
              textTransform: "uppercase",
            }}
          >
            {nameInitial}
          </Typography>
        )}
      </Avatar>
    </CustomCommonTooltip>
  );
};
