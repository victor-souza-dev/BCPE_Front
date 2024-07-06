import { css, Global } from "@emotion/react";
import { useTheme } from "@mui/material";
import nProgress from "nprogress";

import { baseApi } from "src/configs/services/baseApi";

const nProgressStyles = (
  color: string = "#36C0EE",
  hidden: boolean = false,
) => {
  return css`
    #nprogress .bar {
      visibility: ${!hidden ? "visible" : "hidden"};
      background: ${color};
      position: fixed;
      z-index: 1030;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
    }
  `;
};

export const NProgress = () => {
  const theme = useTheme();

  nProgress.configure({
    showSpinner: false,
  });

  [baseApi].forEach((api) => {
    api.interceptors.request.use((config) => {
      nProgress.start();
      return config;
    });

    api.interceptors.response.use(
      (response) => {
        nProgress.done();
        return response;
      },
      (error) => {
        nProgress.done();
        return Promise.reject(error);
      },
    );

    api.defaults.onDownloadProgress = (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor((loaded * 100) / (total ?? 1));
      nProgress.set(percentage / 100);
    };

    api.defaults.onUploadProgress = (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor((loaded * 100) / (total ?? 1));
      nProgress.set(percentage / 100);
    };
  });

  return <Global styles={nProgressStyles(theme.palette.primary.main)} />;
};
