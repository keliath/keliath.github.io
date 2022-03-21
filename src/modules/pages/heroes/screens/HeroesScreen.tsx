import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HeroesList from "../components/HeroesList";

const HeroesScreen = () => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <Typography variant="h1">Héroes de Marvel</Typography>
      </Grid>

      <Grid item xs={12}>
        <HeroesList />
      </Grid>
    </Grid>
  );
};

export default HeroesScreen;
