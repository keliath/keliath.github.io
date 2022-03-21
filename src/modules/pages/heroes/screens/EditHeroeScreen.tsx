import { Box, Grid, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useAppDispatch, useAppSelector } from "../../../../app/hooks/useRedux";
import { useLazyGetHeroeQuery } from "../slices/heroesApiSlice";
import { heroesList, setHeroesList } from "../slices/heroesSlice";
import EditHeroeForm from "../components/EditHeroeForm";
import SimpleFormOneColumn from "../../../shared/components/Skeletons/SimpleFormOneColumn";

const EditHeroeScreen = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { heroeId } = useParams<{ heroeId: string }>();

  const currentHeroesList = useAppSelector(heroesList);

  const [getHeroe, { isSuccess }] = useLazyGetHeroeQuery();

  useEffect(() => {
    if (!currentHeroesList.length && !isSuccess) {
      getHeroe({
        heroeId: +heroeId!,
      })
        .unwrap()
        .then((response) => {
          if (response) dispatch(setHeroesList([...response.data.results!]));
        })
        .catch((error) => console.log(error));
    }
    return () => {};
  }, [getHeroe, isSuccess, heroeId, currentHeroesList.length, dispatch]);

  return (
    <Box minHeight={"100vh"}>
      <Grid container sx={{ padding: 5 }}>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Grid item container alignItems="center" gap={1}>
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBackIcon sx={{ color: theme.palette.text.dark }} />
            </IconButton>
            <Typography variant="h2">Ver Héroe</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} xl={6} sx={{ mt: 2 }}>
          {!!currentHeroesList.length ? (
            <EditHeroeForm heroeId={+heroeId!} />
          ) : (
            <SimpleFormOneColumn />
          )}
        </Grid>
        {/* {roleIdToDelete && <DeleteRoleDialog />} */}
      </Grid>
    </Box>
  );
};

export default EditHeroeScreen;
