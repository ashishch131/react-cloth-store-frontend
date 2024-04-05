import "./category.css";
import { Link } from "react-router-dom";

const Category = ({ item }) => {
  return (
    <div className="category">
      <Link to={`/products/${item.cat}`}>
        <img className="catImg" src={item.img} alt="" />
        <div className="catInfo">
          <span className="catTitle">{item.title} </span>
          <button className="catButton">SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default Category;
