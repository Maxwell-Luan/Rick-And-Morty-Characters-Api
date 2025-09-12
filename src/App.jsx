import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./routes/Header";
import Home from "./routes/Header/Home";
import Character from "./routes/Header/Character";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="character/:charId" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
