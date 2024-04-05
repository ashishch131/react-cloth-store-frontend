import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
 
  return (
    <div className="navbar">
      <div className="navbarWrap">
        <div className="navleft">
          <span className="lang">EN</span>
          <div className="navSearch">
            <input type="text" className="searchInput" />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="navcenter">Shopify.</div>
        <div className="navright">
          <span>REGISTER</span>
          <span>SIGN IN</span>
          <Link to={"/cart"}>
          <Badge badgeContent={`${quantity}`} color="primary">
            <ShoppingCartOutlinedIcon color="action" />
          </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
