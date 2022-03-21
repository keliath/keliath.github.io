import { Route, Routes } from "react-router-dom";
import EditHeroeScreen from "../screens/EditHeroeScreen";
import HeroesScreen from "../screens/HeroesScreen";

const index = () => {
  return (
    <Routes>
      <Route index element={<HeroesScreen />} />

      <Route path=":heroeId" element={<EditHeroeScreen />} />
    </Routes>
  );
};

export default index;
