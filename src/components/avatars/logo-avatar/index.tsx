import { Avatar, Box, Typography } from "@mui/material";
import { LogoAvatarPropsI } from "../Avatars.interface";
import { PROJECT_NAME } from "@/configs/env";
import { AVATAR_VARIANTS } from "@/constants/ui";

export const LogoAvatar = (props: LogoAvatarPropsI) => {
  const {
    productName,
    isWhite = false,
    width = "100%",
    height = 38,
    variant = AVATAR_VARIANTS?.SQUARE,
  } = props;

  const Logo = isWhite ? "" : "";

  return (
    <Box>
      <Avatar
        src={Logo}
        alt={PROJECT_NAME}
        sx={{ width, height, objectFit: "cover" }}
        variant={variant}
      />
      {!!productName && (
        <Typography
          component={"p"}
          sx={{
            color: "primary.main",
            textAlign: "right",
            fontWeight: "fontWeightBold",
          }}
        >
          {productName}
        </Typography>
      )}
    </Box>
  );
};
