import { Grid2 } from "@mui/material";
import { CustomGridPropsI } from "../Grids.interface";

export const ItemGrid = (props: CustomGridPropsI) => {
  const {
    xs = 12,
    sm = xs,
    md = sm,
    lg = md,
    xl = lg,
    customStyles,
    children,
  } = props;

  return (
    <Grid2 size={{ xs, sm, md, lg, xl }} sx={{ ...customStyles }}>
      {children}
    </Grid2>
  );
};
