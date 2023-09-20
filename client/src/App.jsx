import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Title from "./components/Title/Title";
import InfoPage from "./pages/InfoPage/InfoPage";
import TargetInfoPage from "./pages/TargetInfoPage/TargetInfoPage";

function App() {
  return (
    <div>
      <Title title="TargetsMap" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/targetInfo/:id" element={<TargetInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
