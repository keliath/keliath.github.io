// --- Material Ui Imports --- //
import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const FullBackImgCard = styled(Card)({
  root: {
    position: "relative",
  },
});

export const FullBackImgCardActionArea = styled(CardActionArea)({
  root: {
    position: "relative",
  },
});

export const FullBackImgCardActions = styled(CardActions)({
  root: {
    position: "relative",
  },
});

export const FullBackImgCardContent = styled(CardContent)({
  root: {
    position: "relative",
    backgroundColor: "transparent",
  },
});

export const FullBackImgCardMedia = styled(CardMedia)({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%",
  },
});
