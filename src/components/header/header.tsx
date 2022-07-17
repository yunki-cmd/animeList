
import {Link} from "react-router-dom";

import logo from "../../assets/logo/mylianiman-logos_transparent.png";
import Search from "../search";

function Header() {
  
  return (
    <header className="flex h-24 justify-around">     
      <div className="justify-start">
        <Link to="/" >
          <img className="h-full" src={logo} alt="" />
        </Link>
      </div>
      <div>
      <Search className="m-auto" />
      </div>
    </header>
  );
};

export default Header;