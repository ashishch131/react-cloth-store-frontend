import "./cart.css";
import Navbar from "../../components/navbar/Navbar";
import Annoucement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import CartItems from "../../components/cartitems/CartItems";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div>
      <Navbar />
      <Annoucement />
      <div className="cart">
        <h1 className="cartTitle">YOUR BAG</h1>
        <div className="cartTop">
          <div className="carttopLeft">
            <button className="continue">CONTINUE SHOPPING</button>
          </div>
          <div className="carttopCenter">
            <span className="bag">Shopping Bag(2)</span>
            <span className="bag">Your Whishlist(0)</span>
          </div>
          <div className="carttopRight">
            <button className="checknow">CHECKOUT NOW</button>
          </div>
        </div>
              <div className="cartBottom">
                  <div className="cartItems">
         
                     
                  <CartItems cart={cart}  />
                
                  
                  </div>

          <div className="cartbottomRight">
            <div className="bottomrightTitle">ORDER SUMMARY</div>
            <div className="prodTotal">
              <span className="total">Subtotal</span>
              <span className="price">Rs. 300</span>
            </div>
            <div className="prodTotal">
              <span className="total">Estimated Shipping</span>
              <span className="price">Rs. 200</span>
            </div>
            <div className="prodTotal">
              <span className="total">Shipping Discount</span>
              <span className="price">Rs. -150</span>
            </div>
            <div className="prodTotal">
              <h3 className="total">Total</h3>
              <h3 className="price">Rs. 450</h3>
            </div>
            <button className="checkoutBtn">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
