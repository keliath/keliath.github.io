import useTheme from "@mui/material/styles/useTheme";

import FabThemeMode from "../components/FabThemeMode";
import ResetDataBtn from "../components/ResetDataBtn";

//wrapper if menu is needed
export const MainLayout = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const theme = useTheme();

  return (
    <div
      style={{
        padding: "1rem",
        ...(theme.palette.mode === "light" && { backgroundColor: "#ebeff2" }),
      }}
    >
      <ResetDataBtn />
      <FabThemeMode />
      {children}
    </div>
  );
};
