import { PaletteMode } from "@mui/material";
import { Property } from "csstype";

/**
 * Corresponde al estado de customizationSlice usado en Redux
 * @interface
 */
export interface CustomizationState {
  /**
   * ID del item activo en el sidebar
   */
  isMenuSelect: string | undefined;
  /**
   * Modo de color actual 'light' o 'dark'
   */
  themeMode: PaletteMode;
  /**
   * Nombre de la paleta de colores actual
   * generalmente correspondera al nombre del tenant
   */
  presetColor: string;
  /**
   * idioma
   */
  locale: string;
  /**
   * Estado del sidebar, indica si el sidebar debe mostrarse
   */
  opened: boolean;
  /**
   * Fuente global de la aplicación
   */
  fontFamily: Property.FontFamily;
  /**
   * Border radius global de la aplicación
   */
  borderRadius?: number;
  /**
   * Estilo de inputs outlined, con fondo o sin fondo
   */
  outlinedFilled: boolean;
}
