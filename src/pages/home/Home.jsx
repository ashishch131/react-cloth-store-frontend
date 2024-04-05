import "./home.css";
import Announcement from "../../components/announcement/Announcement";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newletter/Newsletter";
import Products from "../../components/products/Products";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
