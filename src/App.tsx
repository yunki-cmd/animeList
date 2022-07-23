import { Routes, Route } from "react-router-dom";

import DetailsCard from "./components/DetailCard";
import Sinopsis from "./components/details/sinopsis";
import Header from "./components/header/header";
import ListCards from "./components/listCards";
import Result from "./components/result";
import {SetResultFilter,TrendingContext } from "./context/index";
import Home from "./view/home";


function App() {
  return (
    <>
      <Header />
      <SetResultFilter>
        <TrendingContext>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/" element={<ListCards />}></Route>
              <Route path="/:page" element={<ListCards />}></Route>
            </Route>
            
            <Route path="/anime/:id" element={<DetailsCard />} >
              <Route path="/anime/:id" element={<Sinopsis />} />
              <Route path="/anime/:id/details" element={<Sinopsis />} />
              <Route path="/anime/:id/characters" element={<h1>characters</h1>} />
              <Route path="/anime/:id/episodes" element={<h1>episodes</h1>} />
              <Route path="/anime/:id/statics" element={<h1>statics</h1>} />
              <Route path="/anime/:id/soundtrack" element={<h1>soundtrack</h1>} />
            </Route>
            <Route path="/search/" element={<Result />}>
              <Route path="/search/" element={<ListCards />}/>
              <Route path=":id" element={<ListCards />} />
              <Route path=":id/:page" element={<ListCards />} />
            </Route>
            </Routes>
        </TrendingContext>
    </SetResultFilter>
    </>
  );
}

export default App;
