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
      <Route path="/details/:id" element={<DetailsCard />} />
      <Route path="/search/" element={<Result />}>
          <Route path=":id" element={<Result />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
