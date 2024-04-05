import "./product.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from "react-router-dom";
const Product = ({item}) => {
  return (
    <div className="product">
   
        <img className="productImg"
          src={item.img}
          alt=""
        />
      <div className="productInfo">
        <div className="circle">
<ShoppingCartOutlinedIcon/>
        </div>
          <Link to={`/product/${item._id}`}>
        <div className="circle">
<SearchOutlinedIcon/>
        </div>
          </Link>
        <div className="circle">
<FavoriteBorderOutlinedIcon/>
        </div>
        </div>

    </div>
  );
};

export default Product;
