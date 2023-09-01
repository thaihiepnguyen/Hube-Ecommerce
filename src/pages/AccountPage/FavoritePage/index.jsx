import styles from './style.module.scss'
import React, {useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL} from "../../../App";
import ProductCard from "../../../components/ProductCard";

const FavoritePage = () => {
  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    const urlProducts = `${BASE_URL}/products/favorite`;
    async function fetchData() {
      const response = await axios.get(urlProducts, {
        withCredentials: true,
      })

      setProducts(response.data)
    }
    fetchData()
  }, []);
  return (
    <div style={{display: "flex", flexWrap: "wrap", width: '100vh'}}>
      {products.map(item => (
        <div key={item._id} style={{width: 230, marginLeft: 20, marginBottom: 20}}>
          <ProductCard
            imageUrl={`/products/${item._id}`}
            image={item.image}
            name={item.name}
            rate={item.rate}
            price={item.price}
            discount={item.discount}
            address={item.address}
            sale={item.sale}
            isFavorite={item.isFavorite}
            categories={item.tags}
            shopName={item['shopInfo'] ? item['shopInfo'][0].shopName : 'Gojo Shop'}
          />
        </div>
      ))}
    </div>
  )
}

export default FavoritePage;