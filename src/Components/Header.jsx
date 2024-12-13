 import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaRocketchat } from "react-icons/fa";
import "./Header.css"
function Navbar() {
  return (
    <nav className="fstnav">
    <div className="fst_navlogo">
     <h1> <span className="logocolor">World</span><span className="logosec_color">Tour</span></h1>
    </div>
      <ol className="fstnav_right_menu">
     <li>
      <Link to="/" className="fst_nav_links"><FaHome />

      </Link></li>
     <li>
      <Link to="/search" className="fst_nav_links"> <FaSearch />
       </Link>
     </li>
     <li><a href="#" className="fst_nav_links"><FaRocketchat />
     </a></li>
      </ol>
   </nav>
 
  );
}

export default Navbar;
