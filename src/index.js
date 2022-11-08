import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./sidor/Layout";
import Start from "./sidor/Start";
import SkapaKonto from "./sidor/SkapaKonto";
import Kontakt from "./sidor/Kontakt";
import NoPage from "./sidor/NoPage";
import Tjanster from "./sidor/Tjanster";
import Inloggad from "./sidor/Inloggad";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="SkapaKonto" element={<SkapaKonto />} />
          <Route path="Kontakt" element={<Kontakt />} />
          <Route path="Tjanster" element={<Tjanster />} />
          <Route path="Inloggad" element={<Inloggad />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);