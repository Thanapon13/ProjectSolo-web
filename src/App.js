import { Bounce, ToastContainer } from "react-toastify";
import Router from "./routes/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Header />
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
