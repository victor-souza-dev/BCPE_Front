import { SnackbarProvider } from "notistack";

import { NProgress } from "./NProgress";
import { ServerAlert } from "./ServerAlert";
import { Theme } from "./Theme";

interface IProps {
  children: React.ReactNode;
}

export const ConfigWrapper = ({ children }: IProps) => {
  return (
    <Theme>
      <SnackbarProvider maxSnack={3}>
        <ServerAlert>{children}</ServerAlert>
      </SnackbarProvider>
      <NProgress />
    </Theme>
  );
};
