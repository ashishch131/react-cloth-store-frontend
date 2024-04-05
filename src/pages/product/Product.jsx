import "./product.css";
import Navbar from "../../components/navbar/Navbar";
import Annoucement from "../../components/announcement/Announcement";
import Newletter from "../../components/newletter/Newsletter";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../requestMethod";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";

const Product = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "minus") {
     quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch( addProduct({...product, quantity, size, color}))

  
  }
  return (
    <div>
      <Navbar />
      <Annoucement />
      <div className="productCont">
        <div className="ContLeft">
          <img className="prodImg" src={product.img} alt="" />
        </div>
        <div className="ContRight">
          <h1 className="productHeading">{product.title}</h1>
          <p className="proDesc">{product.desc}</p>
          <span className="proPrc">{product.price}rs</span>
          <div className="proInfo">
            <div className="proinfoLeft">
              <h4 className="infoleftTitle">Color</h4>
              {product.color?.map((c) => (
                <span
                  className="proColor"
                  style={{ backgroundColor: `${c}` }}
                  key={c}
                onClick={()=>setColor(c)}></span>
              ))}
            </div>
            <div className="proinfoRight">
              <h4 className="proSize">Size</h4>
              <select className="filterSize" onChange={(e)=> setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <option key={s}>{s} </option>
                ))}
              </select>
            </div>
          </div>
          <div className="proAdd">
            <div className="proaddLeft">
              <span className="minus" onClick={()=>handleQuantity("minus")}>-</span>
              <span className="number">{quantity} </span>
              <span className="plus" onClick={()=>handleQuantity("plus")}>+</span>
            </div>
            <div className="proaddRight">
              <button className="addBtn" onClick={handleClick}>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <Newletter />
      <Footer />
    </div>
  );
};

export default Product;
