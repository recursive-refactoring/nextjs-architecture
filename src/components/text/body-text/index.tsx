import { Typography } from "@mui/material";

export const BodyText = (props: any) => {
  const {
    variant = "body2",
    color = "text.primary",
    fontWeight = "fontWeightNormal",
    component = "p",
    children,
  } = props;

  return (
    <Typography
      variant={variant}
      sx={{ color, fontWeight }}
      component={component}
    >
      {children}
    </Typography>
  );
};
