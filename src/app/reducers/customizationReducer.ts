import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// types
import { Property } from "csstype";
import { PaletteMode } from "@mui/material";
import { CustomizationState } from "../types";

// helpers
import { getThemeFromStorage } from "../helpers/storageHelpers";

const initialState: CustomizationState = {
  isMenuSelect: undefined, //for active default menu
  fontFamily: `'EuclidCircularA', sans-serif`,
  borderRadius: 12,
  outlinedFilled: true,
  themeMode: getThemeFromStorage(),
  presetColor: "web",
  locale: "es",
  opened: true,
};

const customizationSlice = createSlice({
  name: "customization",
  initialState,
  reducers: {
    setMenuOpen: (state, action: PayloadAction<string>) => {
      state.isMenuSelect = action.payload;
    },
    setThemeMode: (state, action: PayloadAction<PaletteMode>) => {
      state.themeMode = action.payload;
    },
    setPresetColor: (state, action: PayloadAction<string>) => {
      state.presetColor = action.payload;
    },
    setLocale: (state, action: PayloadAction<string>) => {
      state.locale = action.payload;
    },
    setSidebarOpened: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
    setFontFamily: (state, action: PayloadAction<Property.FontFamily>) => {
      state.fontFamily = action.payload;
    },
    setBorderRadius: (state, action: PayloadAction<number>) => {
      state.borderRadius = action.payload;
    },
    setOutlinedFilled: (state, action: PayloadAction<boolean>) => {
      state.outlinedFilled = action.payload;
    },
    resetCustomization: (state) => {},
  },
});

export const {
  setMenuOpen,
  setThemeMode,
  setPresetColor,
  setLocale,
  setSidebarOpened,
  setFontFamily,
  setBorderRadius,
  setOutlinedFilled,
  resetCustomization,
} = customizationSlice.actions;

export default customizationSlice.reducer;
