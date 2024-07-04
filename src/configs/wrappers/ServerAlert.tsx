import { useSnackbar } from "notistack";

import { baseApi } from "src/shared/services/baseApi";

interface IProps {
  children: React.ReactNode;
}

export function ServerAlert({ children }: IProps) {
  const { enqueueSnackbar } = useSnackbar();

  baseApi.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      enqueueSnackbar(error.message, { variant: "error" });
      return Promise.reject(error);
    },
  );

  return children;
}
