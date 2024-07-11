import { Backdrop, Box, CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";
import { useTranslation } from "react-i18next";

import { baseApi } from "src/configs/services/baseApi";
import { tokens } from "src/locales/tokens";

interface IErrorValidation {
  errors: {
    [key: string]: string[];
  };
}

interface IErrorExtractProperty {
  StatusCode: number;
  Message: string;
}

interface IProps {
  children: React.ReactNode;
}

type ErrorResponse = IErrorValidation | IErrorExtractProperty;

let interceptorsInitialized = false;

export function ServerAlert({ children }: IProps) {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  let isLoading = false;
  let errorHandled = false;

  if (!interceptorsInitialized) {
    baseApi.interceptors.request.use((config) => {
      isLoading = true;
      errorHandled = false; // Reset errorHandled for each request
      return config;
    });

    baseApi.interceptors.response.use(
      (response) => {
        isLoading = false;
        return response;
      },
      (error: AxiosError<{ data: ErrorResponse }>) => {
        if (!errorHandled) {
          isLoading = false;
          errorHandled = true;
          let message = "An error occurred";

          const errorData = error.response?.data;

          if (!errorData) {
            enqueueSnackbar(message, { variant: "error" });
            return Promise.reject(error);
          }

          if ("Message" in errorData) {
            message = errorData.Message as string;
          } else if ("errors" in errorData) {
            const typeData = errorData as IErrorValidation;
            const firstError = Object.values(typeData.errors)[0][0].replaceAll(
              " ",
              "",
            );

            message = t(
              tokens.responseErrors[
                firstError as keyof typeof tokens.responseErrors
              ],
            );
          }

          enqueueSnackbar(message, { variant: "error" });
        }
        return Promise.reject(error);
      },
    );

    interceptorsInitialized = true;
  }

  return (
    <>
      <Backdrop open={isLoading}>
        <Box
          pl={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="inherit" />
        </Box>
      </Backdrop>
      {children}
    </>
  );
}
