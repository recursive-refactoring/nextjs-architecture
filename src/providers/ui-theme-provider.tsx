"use client";

import { palette } from "@/theme/palette";
import { typography } from "@/theme/typography";
import { Theme } from "@emotion/react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export const UiThemeProvider = (props: any) => {
  const { children } = props;
  const themeOptions: Theme = {
    palette,
    typography,
    spacing: 10,
    shape: { borderRadius: 4 },
  };
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          "& ::selection": {
            backgroundColor: theme?.palette?.secondary?.main,
            color: theme?.palette?.common?.white,
          },
        })}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
