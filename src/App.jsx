import { Routes, Route } from "react-router-dom";

import DetailsCard from "./components/DetailCard";
import Search from "./components/search";
import Home from "./view/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:id" element={<Search />} />
      <Route path="/details/:id" element={<DetailsCard />} />
    </Routes>
  );
}

export default App;
