import { pxToRem } from "@/utils/styles";
import { Box } from "@mui/material";
import { DividerLayoutPropsI } from "../layouts.interface";

export const DividerLayout = (props: DividerLayoutPropsI) => {
  const { size = 1, borderColor = "primary" } = props;
  return (
    <Box
      sx={{
        borderTop: `${pxToRem(size)} solid`,
        borderColor,
      }}
    />
  );
};
