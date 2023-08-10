import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { AppRoutes } from "./AppRoutes";
import { AnimatedBackground } from "./components/AnimatedBackground/AnimatedBackground";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
      <AnimatedBackground />
    </>
  );
}

export default App;
