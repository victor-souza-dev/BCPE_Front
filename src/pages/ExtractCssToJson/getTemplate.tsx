import { TextField } from "@mui/material";

import { ITreeNode } from "./Index";

export function generateTemplateConfig(id: string, valueChildren: ITreeNode) {
  return {
    id: `config-${id}`,
    label: "Config",
    children: [
      {
        id: `className-${id}`,
        label: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id={`className-${id}`}
              label="Identifier"
              size="small"
              placeholder=".className > 0"
              variant="standard"
              required
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            />
          </div>
        ),
      },
      {
        id: `keyValue-${id}`,
        label: "Properties",
        children: [valueChildren],
      },
    ],
  };
}

export function generateTemplateValue(id: string) {
  return {
    id: `value-${id}`,
    label: "Value",
    children: [
      {
        id: `property-${id}`,
        label: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id={`property-${id}`}
              label="Property"
              size="small"
              placeholder="background-color"
              variant="standard"
              required
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            />
          </div>
        ),
      },
      {
        id: `resultName-${id}`,
        label: (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              id={`resultName-${id}`}
              label="Variable Name"
              size="small"
              placeholder="backgroundColor1"
              variant="standard"
              required
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            />
          </div>
        ),
      },
    ],
  };
}
