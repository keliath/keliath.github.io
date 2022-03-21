import { Grid, CardContent, Typography, CardMedia } from "@mui/material";
import { format } from "date-fns";

import { Heroe } from "../interfaces/heroes.interface";
import SubCard from "../../../shared/components/Cards/SubCard";
import { useAppSelector } from "../../../../app/hooks/useRedux";
import { editedHeroesList } from "../slices/heroesSlice";
import { useMemo, useState } from "react";
import {
  EditedHeroe,
  EditedHeroes,
} from "../interfaces/editedHeroes.interface";

interface Props extends Partial<Heroe> {
  id: number;
  name: string;
  goToCharacters: (id: string) => void;
}

const RenderHeroeCard = ({ id, name, goToCharacters, ...props }: Props) => {
  const currentEditedHeroesList = useAppSelector(editedHeroesList);

  // const [currentHeroe] = useState<EditedHeroe | undefined>(
  //   currentEditedHeroesList &&
  //     id in currentEditedHeroesList &&
  //     currentEditedHeroesList[id as unknown as keyof EditedHeroes]
  // );

  // const currentHeroe = useMemo(() => {
  //   if (currentEditedHeroesList && id in currentEditedHeroesList)
  //     return currentEditedHeroesList[id as unknown as keyof EditedHeroes];
  // }, [currentEditedHeroesList]);

  return (
    <Grid key={`heroe-card-${id}`} item xs={12} sm={6} md={4} lg={3} xl={3}>
      <SubCard
        sx={{ position: "relative", cursor: "pointer" }}
        onClick={() => goToCharacters(id.toString())}
      >
        <CardMedia
          component="img"
          height="140"
          image={`${props.thumbnail?.path}.${props.thumbnail?.extension}`}
          alt={`${name} thumbnail`}
          sx={{
            // position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "100%",
          }}
        />
        <CardContent>
          <Typography
            component="span"
            variant="body2"
            color="text.secondary"
            gutterBottom
          >
            Modified:{" "}
            {props.modified
              ? format(new Date(props.modified), "dd-MM-yyyy")
              : "-no date-"}
          </Typography>
          <Typography
            variant="h1"
            color="text.primary"
            align="center"
            gutterBottom
          >
            {(currentEditedHeroesList &&
              currentEditedHeroesList[id as unknown as keyof EditedHeroes]
                ?.newName) ||
              name}
          </Typography>
          <Typography color="text.secondary" align="center" gutterBottom>
            {(currentEditedHeroesList &&
              currentEditedHeroesList[id as unknown as keyof EditedHeroes]
                ?.newDescription) ||
              props.description ||
              "-no description-"}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </SubCard>
    </Grid>
  );
};

export default RenderHeroeCard;
