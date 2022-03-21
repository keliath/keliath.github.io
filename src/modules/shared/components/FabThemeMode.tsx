import React from "react";
import Fab from "@mui/material/Fab";
import useTheme from "@mui/material/styles/useTheme";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { SxProps, Zoom } from "@mui/material";

import { useAppDispatch } from "../../../app/hooks/useRedux";
import { setThemeMode } from "../../../app/reducers/customizationReducer";

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

const FabThemeMode = () => {
  const dipatch = useAppDispatch();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const changeThemeMode = () => {
    if (theme.palette.mode === "dark") {
      dipatch(setThemeMode("light"));
      localStorage.setItem("themeMode", "light");
    } else {
      dipatch(setThemeMode("dark"));
      localStorage.setItem("themeMode", "dark");
    }
  };

  const fabs = [
    {
      color: "primary" as "primary",
      sx: fabStyle as SxProps,
      icon: <WbSunnyIcon />,
      label: "light",
    },
    {
      color: "secondary" as "secondary",
      sx: fabStyle as SxProps,
      icon: <ModeNightIcon />,
      label: "dark",
    },
  ];

  return (
    <>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={theme.palette.mode === fab.label}
          timeout={transitionDuration}
          onClick={changeThemeMode}
          style={{
            transitionDelay: `${
              theme.palette.mode === fab.label ? transitionDuration.exit : 0
            }ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </>
    // <Zoom
    //   in={true}
    //   timeout={transitionDuration}
    //   style={{
    //     transitionDelay: `${transitionDuration.exit}ms`,
    //   }}
    //   unmountOnExit
    // >
    //   <Fab
    //     color="primary"
    //     aria-label="add"
    //     sx={fabStyle as SxProps}
    //     onClick={changeThemeMode}
    //   >
    //     {theme.palette.mode === "dark" ? <ModeNightIcon /> : <WbSunnyIcon />}
    //   </Fab>
    // </Zoom>
  );
};

export default FabThemeMode;
