import { TextField } from "@mui/material";
import { v4 } from "uuid";

import { tokens } from "src/locales/tokens";
import { ITreeNode } from "src/pages/ExtractCssToJson/Index";

interface ITextField {
  id: string;
  label: string;
  placeholder: string;
  defaultValue?: string;
}

function generateId(prefix: string) {
  return `${prefix}-${v4()}`;
}

export function createTextField({
  id,
  label,
  placeholder,
  defaultValue = "",
}: ITextField) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id={id}
        label={label}
        size="small"
        placeholder={placeholder}
        defaultValue={defaultValue}
        variant="standard"
        required
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export function generateTemplateConfig(t: any, valueChildren: ITreeNode) {
  const id = generateId("config");

  return {
    id,
    label: t(tokens.extractCssToJson.config),
    children: [
      {
        id: generateId("className"),
        label: createTextField({
          id: generateId("className"),
          label: t(tokens.extractCssToJson.className),
          placeholder: `.${t(tokens.extractCssToJson.className.replaceAll(" ", ""))} > 0`,
        }),
      },
      {
        id: generateId("values"),
        label: t(tokens.extractCssToJson.values),
        children: [valueChildren],
      },
    ],
  };
}

export function generateTemplateValue(t: any) {
  const id = generateId("keyValues");

  return {
    id,
    label: t(tokens.extractCssToJson.keyValues),
    children: [
      {
        id: generateId("property"),
        label: createTextField({
          id: generateId("property"),
          label: t(tokens.extractCssToJson.property),
          placeholder: "background-color",
        }),
      },
      {
        id: generateId("variableName"),
        label: createTextField({
          id: generateId("variableName"),
          label: t(tokens.extractCssToJson.variableName),
          placeholder: "backgroundColor1",
        }),
      },
    ],
  };
}
