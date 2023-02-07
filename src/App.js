import "./App.scss";
import Home from "./Pages/Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
