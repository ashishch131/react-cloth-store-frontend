import "./cartItems.css";

const CartItems = ({ cart }) => {
  return (
    <div className="cartbottomLeft">
      <div className="bottomLeft">
        <img
          className="bottomleftImg"
          src="https://img.freepik.com/free-photo/blue-t-shirt_125540-727.jpg?w=826&t=st=1705583952~exp=1705584552~hmac=fa74fa8e5c6fac9fa6867151f8bd1511be7ecc888b63b32311731a78063d7b81"
          alt=""
        />
      </div>
      <div className="bottomRight">
        <span className="prodName">
          <b>Product: </b>Cotton t-shirt
        </span>
        <div className="prodId">
          <span className="id">
            <b>Id:</b> 965487512
          </span>
          <div className="prodCalc">
            <span className="calc">-</span>
            <span className="calc">2</span>
            <span className="calc">+</span>
          </div>
        </div>
        <div className="prodColor">
          <span className="color"></span>
          <span className="prodprice">RS. 650</span>
        </div>
        <span className="prodSize">
          <b>Size:</b>M
        </span>
      </div>
    </div>
  );
};

export default CartItems;
