import { Box, CircularProgress, CircularProgressProps } from "@mui/material";

interface IProps extends CircularProgressProps {
  imageUrl: string;
}

export function CircularProgressWithAvatar(props: IProps) {
  const { imageUrl, ...rest } = props;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={imageUrl} style={{ width: "7rem", margin: "15px" }} />
        <CircularProgress size={"25px"} variant="indeterminate" {...rest} />
      </Box>
    </Box>
  );
}
