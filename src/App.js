import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Login from "./login";
/* ↓「NotFound」をimport */
import NotMatch from "./notmatch";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/register/`} element={<Register />} />
        <Route path={`/login/`} element={<Login />} />
        {/* ↓これを追加 */}
        <Route path={`/*/`} element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
