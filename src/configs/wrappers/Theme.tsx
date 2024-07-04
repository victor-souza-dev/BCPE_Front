import { ThemeProvider } from "@emotion/react";
import { CssBaseline, useTheme } from "@mui/material";

interface IProps {
  children: React.ReactNode;
}

export const Theme = ({ children }: IProps) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
