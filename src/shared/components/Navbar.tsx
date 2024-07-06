import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { tokens } from "src/locales/tokens";

import { SwitchLanguage } from "./SwitchLanguage";
import { useTours } from "../stores/useTours";

export function Navbar() {
  const { t } = useTranslation();
  const { startRun } = useTours();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" fontWeight={"bold"} flexGrow={1}>
            {t(tokens.navbar.title)}
          </Typography>
          <Box sx={{ display: "flex" }} gap={1}>
            <Button
              size="small"
              color="inherit"
              onClick={() => {
                startRun(t);
              }}
            >
              {t(tokens.words.tutorial)}
            </Button>
            <SwitchLanguage />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
