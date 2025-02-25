import { Box, Typography } from "@mui/material";
import { RecordCountChipPropsI } from "../chips.interface";
import { CustomCommonChip } from "../custom-common-chip";
import { CHIP_SHAPE } from "@/constants/ui";
import { SELECTED_ARRAY_LENGTH } from "@/constants/array";
import { Variant } from "@mui/material/styles/createTypography";
import { CustomCommonCircularProgress } from "@/components/progress-bars/custom-common-circular-progress";

export const RecordCountChip = (props: RecordCountChipPropsI) => {
  const {
    isCountLoading = false,
    totalCount = 0,
    name,
    textColor = "text.primary",
    chipColor = "primary",
    chipBackgroundColor = "primary.main",
    nameVariant = "h6",
    isRight = true,
  } = props;

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={1}
      flexWrap={"wrap"}
    >
      {isRight && (
        <Typography variant={nameVariant as Variant} color={textColor}>
          {name}
        </Typography>
      )}
      <CustomCommonChip
        size="medium"
        shape={CHIP_SHAPE?.SQUARE}
        color={chipColor}
        backgroundColor={chipBackgroundColor}
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
      {!isRight && (
        <Typography variant={nameVariant as Variant} color={textColor}>
          {name}
        </Typography>
      )}
    </Box>
  );
};
