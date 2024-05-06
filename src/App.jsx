import "./App.css";
import AppRouting from "./Routing/Routing.jsx";
import { Provider } from "react-redux";
import Store from "./Store/Store.js";

function App() {
  return (
    <>
      <Provider store={Store}>
        <AppRouting />
      </Provider>
    </>
  );
}

export default App;
