import {Route} from "react-router-dom";

import DetailsCard from "../components/DetailCard";
import Sinopsis from "../components/details/sinopsis";

export default function RouteDetails(){
    
    return(
    <Route path="/anime/:id" element={<DetailsCard />} >
        <Route path="/anime/:id" element={<Sinopsis />} />
        <Route path="/anime/:id/details" element={<Sinopsis />} />
        <Route path="/anime/:id/characters" element={<h1>characters</h1>} />
        <Route path="/anime/:id/episodes" element={<h1>episodes</h1>} />
        <Route path="/anime/:id/statics" element={<h1>statics</h1>} />
        <Route path="/anime/:id/soundtrack" element={<h1>soundtrack</h1>} />
    </Route>
    );
};