import { PaletteMode } from "@mui/material";

export const getThemeFromStorage = () =>
  localStorage.getItem("themeMode")
    ? (localStorage.getItem("themeMode") as PaletteMode)
    : "dark";

export const getEditedHeroesStorage = () => {
  const editedHeroes = localStorage.getItem("editedHeroes");

  let editedHeroesRetrieved = undefined;

  if (editedHeroes) editedHeroesRetrieved = JSON.parse(editedHeroes);

  return editedHeroesRetrieved;
};
