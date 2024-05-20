import "./styles/globals.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MapPage } from "./app/pages/MapPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
    </Routes>
  );
}

export default App;
