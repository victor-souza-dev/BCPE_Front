import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Badge, Box, Typography } from "@mui/material";

interface IProps {
  title: string;
}

export function InfoBadge({ title = "Badge example" }: IProps) {
  return (
    <Box sx={{ display: "inline-block", position: "relative" }}>
      <Typography variant="button">{title}</Typography>
      <Badge
        badgeContent={<InfoOutlinedIcon sx={{ width: 15 }} />}
        color="info"
        onClick={() => alert("teste")}
        sx={{
          "& .MuiBadge-badge": {
            color: "white",
            cursor: "pointer",
            p: 0,
            minWidth: 13,
            height: 14.5,
          },
          position: "absolute",
          top: 3,
          right: -8,
        }}
      />
    </Box>
  );
}
