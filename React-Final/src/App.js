import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routes from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="padding-class">
          <Routes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
