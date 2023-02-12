import { Bounce, ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import Footer from "./components/Footer/footer";
import useLoading from "./hooks/useLoading";

function App() {
  const { loading } = useLoading();
  return (
    <div>
      {loading}
      <Router />
      <ToastContainer
        autoClose="1000"
        theme="light"
        position="bottom-center"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
}

export default App;
