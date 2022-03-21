import {
  Alert,
  Button,
  CircularProgress,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/useRedux";
import SubCard from "../../../shared/components/Cards/SubCard";
import {
  editedHeroesList,
  heroesList,
  setEditedHeroesList,
} from "../slices/heroesSlice";
import { useNavigate } from "react-router-dom";
import { EditedHeroes } from "../interfaces/editedHeroes.interface";

const fetchCount = () => {
  return new Promise<{ state: boolean }>((resolve) =>
    setTimeout(() => resolve({ state: true }), 500)
  );
};

interface Props {
  heroeId: number;
}

const EditHeroeForm: FC<Props> = ({ heroeId }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [nameError, setNameError] = useState(false);

  const currentHeroesList = useAppSelector(heroesList);
  const currentEditedHeroesList = useAppSelector(editedHeroesList);

  const heroeToEdit = useMemo(() => {
    if (heroeId) return currentHeroesList.find((dt) => dt.id === heroeId);
  }, [heroeId, currentHeroesList]);

  const currentHeroe = useMemo(() => {
    if (currentEditedHeroesList)
      return currentEditedHeroesList[
        heroeToEdit!.id as unknown as keyof EditedHeroes
      ];
  }, [currentEditedHeroesList, heroeToEdit]);

  const cancelHandler = () => {
    navigate(-1);
  };

  const submitEditHandler = () => {
    const newName = nameRef.current?.value!;
    const newDescription = descriptionRef.current?.value! || " ";

    if (!newName) {
      setNameError(true);
      return;
    } else setNameError(false);

    const newHeroInfo = {
      ...heroeToEdit,
      newName,
      newDescription,
    };
    dispatch(setEditedHeroesList({ [heroeToEdit!.id]: newHeroInfo }));

    setLoading(true);
    fetchCount().then(() => {
      setLoading(false);
      setShowAlert(true);
    });
  };

  return (
    <>
      <SubCard>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {showAlert && (
                <Alert severity="success" onClose={() => setShowAlert(false)}>
                  Información editada con éxito.
                </Alert>
              )}
            </Grid>

            <Grid item xs={12} sm={3}>
              <img
                width={"100%"}
                src={`${heroeToEdit!.thumbnail.path}.${
                  heroeToEdit!.thumbnail.extension
                }?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${heroeToEdit!.thumbnail.path}.${
                  heroeToEdit!.thumbnail.extension
                }?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={heroeToEdit!.name}
                loading="lazy"
              />
            </Grid>

            <Grid item xs={12} sm={9}>
              <Stack spacing={1}>
                <Grid item xs={12} md={6}>
                  <Typography variant="h2">Nombre</Typography>
                  <TextField
                    inputRef={nameRef}
                    error={nameError}
                    defaultValue={
                      currentHeroe ? currentHeroe.newName : heroeToEdit!.name
                    }
                    fullWidth
                  />
                  {nameError && (
                    <FormHelperText component={"span"} error>
                      El nombre del héroe no puede ir vacio!
                    </FormHelperText>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h2">Descripción</Typography>
                  <TextField
                    defaultValue={
                      currentHeroe
                        ? currentHeroe.newDescription
                        : heroeToEdit!.description
                    }
                    inputRef={descriptionRef}
                    rows={5}
                    multiline
                    fullWidth
                  />
                </Grid>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1} justifyContent="flex-end">
                <Grid item>
                  <Button variant="outlined" onClick={cancelHandler}>
                    Cancelar
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    disabled={loading}
                    endIcon={loading && <CircularProgress size={20} />}
                    onClick={submitEditHandler}
                    type="submit"
                  >
                    Guardar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </SubCard>
    </>
  );
};

export default EditHeroeForm;
