import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";

interface CircularProgressWithLabelProps extends CircularProgressProps {
  value: number;
  textValue?: string;
  maxValue?: number;
  sizeProgress?: number;
  textSize?: number;
}

export function CircularProgressWithLabel({
  value,
  textValue,
  maxValue = 60,
  sizeProgress = 40,
  textSize = 12,
  ...props
}: CircularProgressWithLabelProps) {
  const percentage = (value / maxValue) * 100;

  return (
    <Box style={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        size={sizeProgress}
        thickness={sizeProgress / 14}
        variant="determinate"
        value={percentage}
        sx={{ color: "#e0e0e0" }}
        {...props}
      />
      <Box
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          style={{ fontSize: textSize, whiteSpace: "nowrap" }}
        >
          {textValue ? textValue : `${Math.round(percentage)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
