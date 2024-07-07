import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { tokens } from "src/locales/tokens";
import { SwitchLanguage } from "src/shared/components/SwitchLanguage";
import { ThreeList } from "src/shared/components/ThreeList";
import { transformTokensToTreeNodes } from "src/shared/helpers/transformTokensToTreeNodes";

import { ITreeNode } from "./ExtractCssToJson/Index";
import { SearchInput } from "../shared/components/SearchInput";

const initialData = transformTokensToTreeNodes(tokens);

export function Translate() {
  const [sidebar, setSidebar] = useState(false);
  const [treeData, setTreeData] = useState<ITreeNode[]>(initialData);
  const { i18n, t } = useTranslation();

  return (
    <Grid container>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{ height: "65px" }}>
        <Toolbar>
          <Box
            flexGrow={1}
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
          >
            <IconButton
              aria-label="open sidebar"
              color="inherit"
              onClick={() => setSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              {t(tokens.phrases.translationManager)}
            </Typography>
          </Box>
          <SwitchLanguage />
        </Toolbar>
      </AppBar>
      <Grid container justifyContent={"center"} pt={4} pb={4}>
        <Box
          width={"40%"}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <SearchInput valueOptions={Object.keys(i18n.store.data)} />
          <Paper sx={{ p: 2 }}>
            <ThreeList.Container fullWidth>
              <ThreeList.TranslateNode
                treeData={treeData}
                setTreeData={setTreeData}
              />
            </ThreeList.Container>
          </Paper>
        </Box>
      </Grid>
      <Drawer open={sidebar} onClose={() => setSidebar(false)}>
        <Box
          sx={{
            width: 250,
            p: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
          role="presentation"
        >
          <Grid container justifyContent={"flex-end"}>
            <IconButton
              aria-label="close sidebar"
              onClick={() => setSidebar(false)}
            >
              <MenuOpenIcon />
            </IconButton>
          </Grid>
          {/* <SearchInput
            placeholder="Pesquisar linguagem..."
            valueOptions={Object.keys(i18n.store.data)}
          />
          <Divider sx={{ mt: 1 }} /> */}
        </Box>
      </Drawer>
    </Grid>
  );
}
