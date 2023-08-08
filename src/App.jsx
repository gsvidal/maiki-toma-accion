import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Subscription } from "./components/Subscription/Subscription";
import { Bio } from "./components/Bio/Bio";
import { Contact } from "./components/Contact/Contact";

function App() {
  const [page, setPage] = useState("subscribe");

  // let pageName = page == "subscribe" ?

  return (
    <>
      <Header setPage={setPage} />
      <main>
        {page === "subscribe" ? (
          <Subscription />
        ) : page === "bio" ? (
          <Bio />
        ) : (
          <Contact />
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
