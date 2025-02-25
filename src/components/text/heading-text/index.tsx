import { Typography } from "@mui/material";

export const HeadingText = (props: any) => {
  const {
    variant = "h3",
    color = "text.primary",
    fontWeight = "fontWeightBold",
    component = variant,
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
