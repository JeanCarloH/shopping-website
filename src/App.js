import { HashRouter, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Shopping from "./components/Shopping";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Shopping />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
