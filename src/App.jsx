import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AppRoutes } from "./AppRoutes";

function App() {
  const [page, setPage] = useState("subscribe");

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
