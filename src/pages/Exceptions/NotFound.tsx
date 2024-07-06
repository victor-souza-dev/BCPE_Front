import { useTranslation } from "react-i18next";

import { tokens } from "src/locales/tokens";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t(tokens.exceptions.notFound)}</h1>
    </div>
  );
};
