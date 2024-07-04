import { useState } from "react";

import DoNotDisturbOnOutlinedIcon from "@mui/icons-material/DoNotDisturbOnOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import { Badge, Box, Tooltip } from "@mui/material";

import { IInputImageProps, InputImage } from "./InputImage";

interface IProps extends IInputImageProps {}

export function InputImageWithBadge(props: IProps) {
  const [isBackground, setIsBackground] = useState(true);

  return (
    <Box sx={{ display: "inline-block", position: "relative" }}>
      <Tooltip title="Remover cor de fundo" placement="top-start" arrow>
        <Badge
          badgeContent={
            !isBackground ? (
              <DoNotDisturbOnOutlinedIcon sx={{ width: 20 }} />
            ) : (
              <TaskAltOutlinedIcon sx={{ width: 20 }} />
            )
          }
          color={isBackground ? "success" : "warning"}
          onClick={() => setIsBackground(!isBackground)}
          sx={{
            "& .MuiBadge-badge": {
              cursor: "pointer",
              width: 20,
              height: 20,
              p: 1,
              borderRadius: "100%",
            },
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
      </Tooltip>
      <InputImage {...props} isBackgroundDark={isBackground} />
    </Box>
  );
}
