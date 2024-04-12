import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/verify-email" && <Header/>}
      <Outlet />
      {location.pathname === "/verify-email" && <Footer/>}
    </>
  );
}

export default App;
