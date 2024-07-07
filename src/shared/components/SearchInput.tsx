import { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import {
  Autocomplete,
  Box,
  CircularProgress,
  InputAdornment,
  Popper,
  TextField,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";

import i18n from "src/locales/i18n";
import { tokens } from "src/locales/tokens";
import { useControlLanguage } from "src/shared/stores/useControlLanguage";

interface IProps {
  valueOptions: readonly string[];
  placeholder?: string;
}

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export function SearchInput({
  valueOptions,
  placeholder = `${i18n.t(tokens.words.search)}...`,
}: IProps) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly string[]>([]);
  const { t } = useTranslation();
  const { setCurrentLanguage } = useControlLanguage();

  const loading = open && options.length === 0;

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(500);

      if (active) {
        setOptions([...valueOptions]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, valueOptions]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleOptionClick = (_: any, newValue: string | null) => {
    if (newValue) {
      setCurrentLanguage(newValue);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Autocomplete
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        inputValue={input}
        onInputChange={(_, newInputValue) => {
          setInput(newInputValue);
          if (newInputValue) {
            setOpen(true);
          }
        }}
        onChange={handleOptionClick}
        fullWidth
        clearOnBlur={false}
        isOptionEqualToValue={(option, value) => option === value}
        getOptionLabel={(option) =>
          t(tokens.languages[option as keyof typeof tokens.languages])
        }
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon
                    sx={{
                      ml: 1,
                      width: "20px",
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <Fragment>
                  {loading && <CircularProgress color="inherit" size={20} />}
                </Fragment>
              ),
              sx: {
                borderRadius: "24px",
                fontSize: "14px",
                height: "47px",
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "0px solid transparent",
                  backgroundColor: "#cbcbcb21",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "0px solid transparent",
                  backgroundColor: "#cbcbcb21",
                },
              },
            }}
          />
        )}
        PopperComponent={({ children, ...props }) => (
          <Popper {...props} sx={{ paddingTop: 1.5 }}>
            {children}
          </Popper>
        )}
      />
    </Box>
  );
}
