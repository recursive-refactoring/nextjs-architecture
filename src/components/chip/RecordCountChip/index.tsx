import { Box, Typography } from "@mui/material";
import { RecordCountChipPropsI } from "../Chip.interface";
import { CustomCommonChip } from "../custom-common-chip";
import { CHIP_SHAPE } from "@/constants/ui";
import { SELECTED_ARRAY_LENGTH } from "@/constants/array";
import { Variant } from "@mui/material/styles/createTypography";
import { CustomCommonCircularProgress } from "@/components/progress-bars/custom-common-circular-progress";

export const RecordCountChip = (props: RecordCountChipPropsI) => {
  const {
    isCountLoading = false,
    totalCount = 0,
    recordName,
    color = "secondary.main",
    recordNameVariant = "h6",
  } = props;

  return (
    <Box display={"flex"} alignItems={"center"} gap={1} flexWrap={"wrap"}>
      <CustomCommonChip
        size="medium"
        shape={CHIP_SHAPE?.SQUARE}
        color="secondary"
        backgroundColor={color}
        label={
          isCountLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomCommonCircularProgress />
            </Box>
          ) : totalCount < SELECTED_ARRAY_LENGTH?.TEN ? (
            `0${totalCount}`
          ) : (
            totalCount
          )
        }
      />
      <Typography variant={recordNameVariant as Variant} color={color}>
        {recordName}
      </Typography>
    </Box>
  );
};
