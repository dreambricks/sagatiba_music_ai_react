import { SessionProvider } from "./context/sessionContext";
import { Routing } from "./routes";
import { ToastContainer, Bounce } from "react-toastify";
function App() {
  return (
    <SessionProvider>
      <Routing />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </SessionProvider>
  );
}

export default App;
