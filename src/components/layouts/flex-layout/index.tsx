import { Box } from "@mui/material";

export const FlexLayout = (props: any) => {
  const {
    alignItems = "center",
    justifyContent = "flex-start",
    gap = 1,
    flexWrap = "wrap",
    children,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems,
        justifyContent,
        gap,
        flexWrap,
      }}
    >
      {children}
    </Box>
  );
};
