import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function App() {
  //layout 만들었어
  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-scroll">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
