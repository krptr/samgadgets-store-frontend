import { Outlet } from "react-router";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export { App };
