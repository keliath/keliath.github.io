import { Button } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../../app/hooks/useRedux";
import {
  editedHeroesList,
  resetEditedHeroesList,
} from "../../pages/heroes/slices/heroesSlice";

const ResetDataBtn = () => {
  const dispatch = useAppDispatch();

  const currentEditedHeroesList = useAppSelector(editedHeroesList);

  const resetData = () => {
    dispatch(resetEditedHeroesList());
  };

  return (
    <>
      {currentEditedHeroesList && (
        <Button
          onClick={resetData}
          variant="contained"
          sx={{
            position: "fixed",
            top: 15,
            right: 15,
            zIndex: 9999,
          }}
        >
          Borrar Datos
        </Button>
      )}
    </>
  );
};

export default ResetDataBtn;
