import { useState } from "react";

import TranslateIcon from "@mui/icons-material/Translate";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { tokens } from "src/locales/tokens";

export function SwitchLanguage() {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const languages = Object.keys(i18n.store.data).filter(
    (lng) => lng !== i18n.language,
  );

  const handleSelect = (language: string) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="switchLanguageButton"
        color="inherit"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ height: "40px", p: 1 }}
      >
        <TranslateIcon sx={{ width: "18px" }} />
        <Typography variant="caption" sx={{ ml: 1 }}>
          {i18n.language.toUpperCase()}
        </Typography>
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List>
          <ListItem sx={{ cursor: "default" }}>
            <ListItemText
              primary={t(
                tokens.languages[
                  i18n.language as keyof typeof tokens.languages
                ],
              )}
            />
          </ListItem>
          <Divider />
          {languages.map((language) => (
            <ListItem
              button
              key={language}
              onClick={() => handleSelect(language)}
            >
              <ListItemText primary={t(`languages.${language}`)} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
}
