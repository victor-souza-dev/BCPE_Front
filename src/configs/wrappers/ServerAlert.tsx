import { Backdrop, Box, CircularProgress } from "@mui/material";
import { AxiosError } from "axios";
import { useSnackbar } from "notistack";

import { baseApi } from "src/shared/services/baseApi";

interface IProps {
  children: React.ReactNode;
}

export function ServerAlert({ children }: IProps) {
  const { enqueueSnackbar } = useSnackbar();
  let isLoading = false;

  baseApi.interceptors.request.use((config) => {
    isLoading = true;
    return config;
  });
  baseApi.interceptors.response.use(
    (response) => {
      isLoading = false;
      return response;
    },
    (error: AxiosError) => {
      isLoading = false;
      let message: any = "An error occurred";

      // @ts-expect-error esperado
      if (error.response?.data.Message) {
        // @ts-expect-error esperado
        message = error.response.data.Message;
      }

      // @ts-expect-error esperado
      if (error.response?.data?.errors) {
        // @ts-expect-error esperado
        message = Object.values(error.response?.data.errors)[0][0];
      }

      enqueueSnackbar(message, {
        variant: "error",
      });

      return Promise.reject(error);
    },
  );

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
