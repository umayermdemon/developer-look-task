import { Outlet, useLocation } from "react-router";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";
import NavMobileFooter from "./components/Navbar/NavMobileFooter";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div>
      {!isLoginPage && <Navbar />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <NavMobileFooter />
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
