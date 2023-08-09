import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AppRoutes } from "./AppRoutes";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
