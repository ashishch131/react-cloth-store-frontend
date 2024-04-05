import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerLeft">
        <h1 className="leftTitle">Shopify</h1>
        <p className="leftDesc">
          {" "}
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="leftIcon">
          <FacebookIcon style={{ color: "3B5999" }} className="lefticon" />
          <InstagramIcon style={{ color: "E4405F" }} className="lefticon"/>
          <TwitterIcon style={{ color: "55ACEE" }} className="lefticon"/>
          <PinterestIcon style={{ color: "E60023" }} className="lefticon"/>
        </div>
      </div>
      <div className="footerCenter">
        <h3 className="centerTitle">Useful links</h3>
        <ul className="centerText">
          <li className="centerList">Home</li>
          <li className="centerList">Cart</li>
          <li className="centerList">Man Fashion</li>
          <li className="centerList">Woman Fashion</li>
          <li className="centerList">Accessories</li>
          <li className="centerList">My Account</li>
          <li className="centerList">Order Tracking</li>
          <li className="centerList">Wishlist</li>
          <li className="centerList">Wishlist</li>
          <li className="centerList">Terms</li>
        </ul>
      </div>
          <div className="footerRight">
              <h3 className="rightTitle">Contact</h3>
              <div className="address">
                  <LocationOnIcon className="rightIcon"/>
                  <span>H-131, madanpur khadar, sarita vihar, new delhi</span>
              </div>
              <div className="address">
                  <PhoneIcon className="rightIcon"/>
                  <span>9315843216</span>
              </div>
              <div className="address">
                  <EmailIcon className="rightIcon"/>
                  <span>chauhanashish1511@gmail.com</span>
              </div>
              <div className="address">
                 <img className="addImg" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
              </div>
              

      </div>
    </div>
  );
};

export default Footer;
