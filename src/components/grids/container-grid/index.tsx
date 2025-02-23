import { Grid2 } from "@mui/material";
import { ContainerGridPropsI } from "../Grids.interface";

export const ContainerGrid = (props: ContainerGridPropsI) => {
  const {
    spacing = 2,
    rowSpacing = spacing,
    columnSpacing = spacing,
    customStyles,
    children,
  } = props;

  return (
    <Grid2
      container
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
      sx={{ ...customStyles }}
    >
      {children}
    </Grid2>
  );
};
