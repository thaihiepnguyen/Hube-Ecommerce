import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Slider from './Slider';
import Footer from '../../../components/Footer';
import ProductList from '../../../components/ProductList';
import { getCategories } from '../../../api/category';
import CategoryCard from '../../../components/CategoryCard';
import axios from 'axios';
import { BASE_URL } from '../../../App';
import CategoriesList from "../../../components/CategoriesList";

const Content = () => {
  const [products, setProducts] = useState([{}]);
  const [recommendProducts, setRecommendProducts] = useState([{}]);
  const [productsHistory, setProductsHistory] = useState([{}]);
  const [productsSale, setProductsSale] = useState([{}]);
  const [categories, setCategories] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      const urlProducts = `${BASE_URL}/products`;
      const urlRecommendProducts = `${BASE_URL}/products/orderByPrice`;
      const urlProductHistory = `${BASE_URL}/products/history`;
      const urlProductSale = `${BASE_URL}/products/orderbySale`;
      const urlCategories = `${BASE_URL}/categories`;
      const [response1, response2, response3, response4
        ,response5
      ] =
        await Promise.all([
          axios.get(urlProducts, {
            withCredentials: true,
          }),
          axios.get(urlRecommendProducts, {
            withCredentials: true,
          }),
          axios.get(urlProductHistory, {
            withCredentials: true,
          }),
          axios.get(urlProductSale, {
            withCredentials: true,
          }),
          axios.get(urlCategories, {
            withCredentials: true,
          })]);

      setProducts(response1.data);
      setRecommendProducts(response2.data);
      setProductsHistory(response3.data);
      setProductsSale(response4.data);
      setCategories(response5.data);
    }

    fetchData();
  }, []);

  const categoriesFake = [
      {
          title: 'Điện thoại',
          image: 'http://localhost:3001/static/category/cat1.jpeg',
      },
      {
          title: 'Thời trang',
          image: 'http://localhost:3001/static/category/cat2.jpeg',
      },
      {
          title: 'Du lịch',
          image: 'http://localhost:3001/static/category/cat3.jpeg',
      },
      {
          title: 'Nội thất',
          image: 'http://localhost:3001/static/category/cat4.jpeg',
      },
      {
          title: 'Thể thao',
          image: 'http://localhost:3001/static/category/cat5.jpeg',
      },
      {
          title: 'Làm đẹp',
          image: 'http://localhost:3001/static/category/cat6.jpeg',
      },
  ]

  return (
    <div className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <Slider />
        <CategoriesList label='Danh mục thể loại' data={categoriesFake}></CategoriesList>

        <ProductList label='Gợi ý cho bạn' data={recommendProducts} />

        <ProductList label='Các sản phẩm phổ biến' data={products} />

        <ProductList label='Các sản phẩm bán chạy' data={productsSale} />

        <ProductList label='Lịch sử tìm kiếm' data={productsHistory} />
      </div>
    
    </div>
  );
};

export default Content;
