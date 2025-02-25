import { Box, Checkbox, Typography } from "@mui/material";
import { CheckboxFieldPropsI } from "../InputFields.interface";

export const CheckboxField = (props: CheckboxFieldPropsI) => {
  const { checked, onChange, label, name = label, id = "" } = props;
  return (
    <Box display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"}>
      <Checkbox
        color={"primary"}
        name={name}
        checked={checked}
        onChange={onChange}
        id={id}
      />
      {!!label && (
        <Typography
          variant={"caption"}
          fontWeight={400}
          color={"slateBlue.main"}
        >
          {label}
        </Typography>
      )}
    </Box>
  );
};
