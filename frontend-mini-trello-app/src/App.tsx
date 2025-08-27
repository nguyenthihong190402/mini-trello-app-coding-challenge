import AppRouter from "./AppRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000}/>
      <AppRouter />
    </Provider>
  );
}

export default App;
