import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getEditedHeroesStorage } from "../../../../app/helpers/storageHelpers";
import { RootState } from "../../../../app/store";
import { EditedHeroes } from "../interfaces/editedHeroes.interface";
import { Heroe } from "../interfaces/heroes.interface";

interface HeroesPageState {
  heroesList: Heroe[];
  editedHeroesList?: EditedHeroes;
}

const initialState: HeroesPageState = {
  heroesList: [],
  editedHeroesList: getEditedHeroesStorage(),
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroesList: (state, action: PayloadAction<Heroe[]>) => {
      // state.heroesList = state.heroesList.concat(action.payload);
      state.heroesList = [...state.heroesList, ...action.payload];
    },
    resetHeroesList: (state) => {
      state.heroesList = [];
    },

    setEditedHeroesList: (state, action: PayloadAction<EditedHeroes>) => {
      state.editedHeroesList = { ...state.editedHeroesList, ...action.payload };
      localStorage.setItem(
        "editedHeroes",
        JSON.stringify({
          ...state.editedHeroesList,
          ...action.payload,
        })
      );
    },
    resetEditedHeroesList: (state) => {
      state.editedHeroesList = undefined;
      localStorage.removeItem("editedHeroes");
    },
  },
});

export const {
  setHeroesList,
  resetHeroesList,
  setEditedHeroesList,
  resetEditedHeroesList,
} = heroesSlice.actions;

export const heroesList = (state: RootState) => state.heroes.heroesList;
export const editedHeroesList = (state: RootState) =>
  state.heroes.editedHeroesList;

export default heroesSlice.reducer;
