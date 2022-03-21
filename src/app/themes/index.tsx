import { createTheme } from "@mui/material";

// assets
import colors from "../assets/scss/_themes-vars.module.scss";
import theme1 from "../assets/scss/_theme1.module.scss";

// project imports
import { componentStyleOverrides } from "./compStyleOverride";
import { themeTypography } from "./typography";
import { CustomizationState } from "../types";
import { ColorProps } from "../types/material-ui.interfaces";
import { themePalette } from "./palette";
import { customShadows } from './shadows';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */
export const theme = (customization: CustomizationState) => {
  let color: ColorProps;
  switch (customization.presetColor) {
    case "theme1":
      color = theme1;
      break;

    case "default":
      color = colors;
      break;
    default:
      color = colors;
  }

  let themeOption = {
    colors: color,
    heading: "",
    paper: "",
    backgroundDefault: "",
    background: "",
    darkTextPrimary: "",
    darkTextSecondary: "",
    textDark: "",
    menuSelected: "",
    menuSelectedBack: "",
    divider: "",
    customization: customization,
  };

  switch (customization.themeMode) {
    case "dark":
      themeOption.paper = color.darkLevel2;
      themeOption.backgroundDefault = color.darkPaper;
      themeOption.background = color.darkBackground;
      themeOption.darkTextPrimary = color.darkTextPrimary;
      themeOption.darkTextSecondary = color.darkTextSecondary;
      themeOption.textDark = color.darkTextPrimary;
      themeOption.menuSelected = color.darkSecondaryMain;
      themeOption.menuSelectedBack = color.darkSecondaryMain + 15;
      themeOption.divider = color.darkTextPrimary;
      themeOption.heading = color.darkTextTitle;
      break;
    case "light":
    default:
      themeOption.paper = color.paper;
      themeOption.backgroundDefault = color.paper;
      themeOption.background = color.background;
      themeOption.darkTextPrimary = color.grey700;
      themeOption.darkTextSecondary = color.grey500;
      themeOption.textDark = color.grey900;
      themeOption.menuSelected = color.primaryMain;
      themeOption.menuSelectedBack = color.primaryLight;
      themeOption.divider = color.grey200;
      themeOption.heading = color.grey900;
      break;
  }

  return createTheme({
    direction: "ltr",
    palette: themePalette(themeOption),
    mixins: {
      toolbar: {
        minHeight: "48px",
        padding: "16px",
        "@media (min-width: 600px)": {
          minHeight: "48px",
        },
      },
    },
    customShadows: customShadows(customization.themeMode, themeOption),
    typography: themeTypography(themeOption),
    components: componentStyleOverrides(themeOption),
  });
};

export default theme;
