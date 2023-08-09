import { Subscription } from "./components/Subscription/Subscription";
import { Bio } from "./components/Bio/Bio";
import { Contact } from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/suscripcion" element={<Subscription />} />
      <Route path="/maiki" element={<Bio />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/" element={<Bio />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
