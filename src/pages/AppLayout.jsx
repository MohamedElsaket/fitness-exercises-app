import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
