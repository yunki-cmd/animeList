import { Routes, Route } from "react-router-dom";

import DetailsCard from "./components/DetailCard";
import Header from "./components/header/header";
import Result from "./components/result";
import Home from "./view/home";

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<DetailsCard />} >
          <Route path="/anime/:id" element={<h1>hola</h1>} />
          <Route path="/anime/:id/details" element={<h1>hola</h1>} />
          <Route path="/anime/:id/characters" element={<h1>characters</h1>} />
      </Route>
      <Route path="/search/" element={<Result />}>
          <Route path=":id" element={<Result />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
