// reducers
import counterReducer from "../../modules/pages/counter/slices/counterSlice";
import heroesReducer from "../../modules/pages/heroes/slices/heroesSlice";
import customizationReducer from "../reducers/customizationReducer";

//

// RTK Query - Slices
import { heroesApi } from "../../modules/pages/heroes/slices/heroesApiSlice";

// Root reducer for configureStore
const reducer = {
  customization: customizationReducer,

  [heroesApi.reducerPath]: heroesApi.reducer,
  heroes: heroesReducer,

  //count reducer
  counter: counterReducer,

  // Auth
  // [authApi.reducerPath]: authApi.reducer,
  // auth: authReducer,
};

export default reducer;
