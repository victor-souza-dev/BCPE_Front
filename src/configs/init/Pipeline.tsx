import "../../locales/i18n";
import React from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import { init } from ".";
import { queryClient } from "../services/queryClient";

interface IProps {
  children: React.ReactNode;
}

export const InitPipeline = ({ children }: IProps) => {
  if (Object.values(init).length > 0) {
    Object.values(init).forEach((initFunction: () => void) => {
      initFunction();
    });
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
