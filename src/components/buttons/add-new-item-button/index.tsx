"use client";
import { AddBox, AddCircle } from "@mui/icons-material";
import { Button } from "@mui/material";
import { AddNewItemButtonPropsI } from "../buttons.interface";

const mappedIcon: any = {
  circle: AddCircle,
  square: AddBox,
};

export const AddNewItemButton = (props: AddNewItemButtonPropsI) => {
  const {
    disabled = false,
    variant = "contained",
    color = "primary",
    onClick,
    hasStartIcon = true,
    hasEndIcon = false,
    iconType = "circle",
    size = "medium",
    customStyles = {},
    children,
  } = props;

  const MapIcon = mappedIcon?.[iconType];

  return (
    <Button
      variant={variant}
      color={color}
      disableElevation
      disabled={disabled}
      className="small"
      size={size}
      startIcon={hasStartIcon && <MapIcon />}
      endIcon={hasEndIcon && <MapIcon />}
      onClick={() => onClick?.()}
      sx={{
        "& .MuiButton-startIcon": {
          ...(!!children ? {} : { marginRight: 0, marginLeft: 0 }),
        },
        ...customStyles,
      }}
    >
      {children}
    </Button>
  );
};
