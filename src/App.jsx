import { Outlet } from "react-router";
import { PromoHeadline } from "./components/PromoHeadline";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <PromoHeadline />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { App };
