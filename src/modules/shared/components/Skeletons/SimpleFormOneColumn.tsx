import { Grid, TextField, Button, Skeleton, InputLabel } from "@mui/material";

const SimpleFormOneColumn = () => {
  return (
    <form>
      <Grid container gap={2}>
        <Grid item container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Skeleton variant="text">
              <InputLabel>Lorem ipsum dolor sit amet consectetur.</InputLabel>
            </Skeleton>
            <Skeleton variant="rectangular" width={"100%"}>
              <TextField fullWidth />
            </Skeleton>
          </Grid>

          <Grid item xs={12}>
            <Skeleton variant="text">
              <InputLabel>Lorem ipsum dolor sit amet consectetur.</InputLabel>
            </Skeleton>
            <Skeleton variant="rectangular" width={"100%"}>
              <TextField fullWidth />
            </Skeleton>
          </Grid>

          <Grid item xs={12}>
            <Skeleton variant="text">
              <InputLabel>Lorem ipsum dolor sit amet consectetur.</InputLabel>
            </Skeleton>
            <Skeleton variant="rectangular" width={"100%"}>
              <TextField fullWidth />
            </Skeleton>
          </Grid>

          <Grid item xs={12}></Grid>

          <Grid item xs={12}>
            <Skeleton variant="text">
              <InputLabel>Lorem ipsum dolor sit amet consectetur.</InputLabel>
            </Skeleton>
            <Skeleton variant="rectangular" width={"100%"}>
              <TextField fullWidth />
            </Skeleton>
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="center"
          justifyContent="flex-end"
          spacing={2}
          sx={{ mt: 1 }}
        >
          <Grid item>
            <Skeleton variant="rectangular">
              <Button variant="outlined" size="large" color="primary">
                Regresar
              </Button>
            </Skeleton>
          </Grid>
          <Grid item>
            <Skeleton variant="rectangular">
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
              >
                Agregar
              </Button>
            </Skeleton>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default SimpleFormOneColumn;
