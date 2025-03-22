import { SessionProvider } from "./context/sessionContext";
import { Routing } from "./routes";
import { ToastContainer, Bounce } from "react-toastify";
function App() {
  return (
    <SessionProvider>
      <Routing />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </SessionProvider>
  );
}

export default App;
