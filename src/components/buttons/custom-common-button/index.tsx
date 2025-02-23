import { Button } from "@mui/material";
import { CustomButtonPropsI } from "../buttons.interface";
import { Cancel, CheckCircle, Visibility } from "@mui/icons-material";
import { BUTTON_CATEGORIES } from "@/constants/ui";

const mappedIcon: any = {
  [BUTTON_CATEGORIES?.SUCCESS]: <CheckCircle />,
  [BUTTON_CATEGORIES?.REJECT]: <Cancel />,
  [BUTTON_CATEGORIES?.PREVIEW]: <Visibility />,
};

export const CustomCommonButton = (props: CustomButtonPropsI) => {
  const {
    children,
    onClick,
    iconType = BUTTON_CATEGORIES?.FILTER,
    primary = false,
    variant = primary ? "contained" : "outlined",
    color = primary ? "primary" : "secondary",
    hasIcon = true,
    disabled = false,
    className = "small",
    fullWidth = false,
    customStyles,
    type = "button",
  } = props;

  const MapIcon = hasIcon && mappedIcon?.[iconType];

  return (
    <Button
      disableElevation
      variant={variant}
      color={color}
      startIcon={MapIcon}
      onClick={onClick}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      sx={customStyles}
      type={type}
    >
      {children}
    </Button>
  );
};
