import { useState } from "react";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Avatar, Box, Tooltip, Typography } from "@mui/material";
import { v4 } from "uuid";

export interface IInputImageProps {
  label?: string;
  defaultImage?: string | null;
  isBackgroundDark?: boolean;
}

export function InputImage({
  label,
  defaultImage,
  isBackgroundDark,
}: IInputImageProps) {
  const [image, setImage] = useState<File | null>(null);
  const [hoverImage, setHoverImage] = useState(false);

  const uuid = v4() + label;
  const isImage = image instanceof File;
  const backgroundColor = isBackgroundDark ? "#ffff" : "#bdbdbd";

  return (
    <Tooltip title={label} placement="bottom">
      <label htmlFor={uuid}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 0.5,
            border: `3px dashed #DADADA`,
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoverImage(true)}
          onMouseLeave={() => setHoverImage(false)}
        >
          <Box
            sx={{
              backgroundColor: "black",
              borderRadius: "3px",
            }}
          >
            <Avatar
              sx={{
                borderRadius: "3px",
                backgroundColor:
                  isImage || defaultImage ? backgroundColor : "#DADADA",
                width: "140px",
                height: "140px",
                display: "flex",
                flexDirection: "column",
                transition: "0.4s",
                opacity: hoverImage ? "0.5" : "1",
              }}
              variant="square"
              src={
                image instanceof File
                  ? URL.createObjectURL(image)
                  : defaultImage || ""
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "0.5s",
              position: "absolute",
              opacity: hoverImage ? "1" : "0",
            }}
          >
            <AddAPhotoIcon
              sx={{
                color: "white",
                fontSize: "30px",
              }}
            />
            <Typography
              variant={"caption"}
              sx={{ color: "white", marginTop: "5px" }}
            >
              Carregar imagem
            </Typography>
          </Box>
          <input
            id={uuid}
            accept="image/jpeg, image/jpg, image/png, image/svg"
            type="file"
            alt="imagem do usuário"
            onChange={(event) => setImage(event.target?.files?.[0] || null)}
            hidden
          />
        </Box>
      </label>
    </Tooltip>
  );
}
