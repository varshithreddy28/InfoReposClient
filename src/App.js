import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";
import FirstForm from "./components/FirstForm/FirstForm";
import ThankYouPage from "./Pages/Thankyou/thankyou";
import Nav from "./components/NavBar/nav";
import Bottomnav from "./components/BottomNav/bottomnav";
import SecondForm from "./Pages/SecondForm/secondform";
import SecondNav from "./components/SecondNav/nav";
import Home from "./Pages/Home/home";
import ScrollToTop from "./components/ScrolltoTop/ScrolltoTop";

function App() {
  const handleFormSuccess = () => {
    console.log("Form Submitted SuccessFully");
  };

  return (
    <div>
      <Router>
        <Nav />
        <SecondNav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="firstform"
            element={<FirstForm handleFormSuccess={handleFormSuccess} />}
          />
          <Route path="secondform" element={<SecondForm />} />
          <Route path="thankyou" element={<ThankYouPage />} />
          <Route path="secondform/thankyou" element={<ThankYouPage />} />
        </Routes>
        <Bottomnav />
      </Router>
    </div>
  );
}

export default App;
