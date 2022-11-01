import NotFoundPage from "./pages/404";
import HomePage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/404" element={<NotFoundPage />} />
          
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;