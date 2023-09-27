import store from "./src/Redux/Store";
import { Provider } from "react-redux";

import AppNavigation from "./src/Navagations/AppNavigation";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
