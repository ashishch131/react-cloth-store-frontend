import "./products.css"
import Product from "../../components/product/Product"
import { productData } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = ({ filters, sort, cat }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
  try {
    const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}` : "http://localhost:5000/api/products");
    console.log(res)
    setProducts(res.data);

  } catch (error) {
    
      }
    }
    getData();
  }, [cat])
  
  useEffect(() => {
    cat &&
    setFilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  
useEffect(() => {
  if (sort === "newest") {
    setFilterProducts((prev) =>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt))
  } else if (sort === "asc") {
    setFilterProducts((prev) =>
    [...prev].sort((a,b)=> a.price - b.price))
  } else {
    setFilterProducts((prev) =>
    [...prev].sort((a,b)=> b.price - a.price))
}
}, [sort])

  return (
      <div className="products">
          {cat ? filterProducts.map((item) => (
              
              <Product item={item} key={item.id} />
          )) : products.slice(0,10).map(item => (
            <Product item={item} key={item.id} />
          ))}
    </div>
  )
}

export default Products