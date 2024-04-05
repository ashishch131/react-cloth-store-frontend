import "./productList.css";
import Navbar from "../../components/navbar/Navbar";
import Anouncement from "../../components/announcement/Announcement";
import NewsLetter from "../../components/newletter/Newsletter";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];


  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    });

  };
  return (
    <div>
      <Navbar />
      <Anouncement />
      <div className="productList">
        <h1 className="proliTitle">{cat} </h1>
        <div className="proliWrap">
        <div className="proliLeft">
          <h3>Filter Products:</h3>
          <select className="filter" name="color" onChange={handleFilters}>
          <option disabled selected>Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
              <option>Green</option>
              <option>Blue</option>
              <option>Brown</option>
          </select>
          <select className="filter" name="size" onChange={handleFilters}>
          <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          
        </div>
        <div className="proliRight">
          <h3>Sort Products:</h3>
          <select className="filter" onChange={e=> setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
          </div>
          </div>
      </div>
      <Products filters={filters} sort={sort} cat={cat} />
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default ProductList