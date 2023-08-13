import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Slider from './Slider';
import Footer from '../../../components/Footer';
import ProductList from '../../../components/ProductList';
import { getCategories } from '../../../api/category';
import CategoryCard from '../../../components/CategoryCard';
import axios from 'axios';
import { BASE_URL } from '../../../App';
import cat1 from '../../../assets/cat1.jpeg';
import cat2 from '../../../assets/cat2.jpeg';
import cat3 from '../../../assets/cat3.jpeg';
import cat4 from '../../../assets/cat4.jpeg';
import cat5 from '../../../assets/cat5.jpeg';
import cat6 from '../../../assets/cat6.jpeg';



const Content = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // double categories
  const categories2 = categories.concat(categories);
  console.log(categories2)
  const data = [
    {
      id: 1,
      name: 'Iphone 11 pro',
      price: 100000,
      rate: 4,
      image:
        'https://down-vn.img.susercontent.com/file/sg-11134201-23020-c7smqpt41cnva1',
      address: 'Hà Nội',
      categories: [
        {
          id: 1,
          name: 'Iphone',
        },
        {
          id: 2,
          name: 'Apple',
        },
      ],
      discount: 10,
      isFavorite: true,
      shopName: 'Tan Sang',
    },
    {
      id: 2,
      name: 'Áo thun nam',
      price: 100000,
      rate: 4,
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-758d08efd9d3881636f31ceaf4f87749',
      address: 'Hà Nội',
      categories: [
        {
          id: 1,
          name: 'Iphone',
        },
        {
          id: 2,
          name: 'Apple',
        },
      ],
      discount: 10,
      isFavorite: true,
      shopName: 'Tan Sang',
    },
    {
      id: 3,
      name: 'Áo thun nam',
      price: 100000,
      rate: 4,
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-758d08efd9d3881636f31ceaf4f87749',
      address: 'Hà Nội',
      categories: [
        {
          id: 1,
          name: 'Iphone',
        },
        {
          id: 2,
          name: 'Apple',
        },
      ],
      discount: 10,
      isFavorite: true,
      shopName: 'Tan Sang',
    },
    {
      id: 4,
      name: 'Áo thun nam',
      price: 100000,
      rate: 4,
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-758d08efd9d3881636f31ceaf4f87749',
      address: 'Hà Nội',
      categories: [
        {
          id: 1,
          name: 'Iphone',
        },
        {
          id: 2,
          name: 'Apple',
        },
      ],
      isFavorite: false,
      shopName: 'Tan Sang',
    },
    {
      id: 5,
      name: 'Áo thun nam',
      price: 100000,
      rate: 4,
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-758d08efd9d3881636f31ceaf4f87749',
      address: 'Hà Nội',
      categories: [
        {
          id: 1,
          name: 'Iphone',
        },
        {
          id: 2,
          name: 'Apple',
        },
      ],
      isFavorite: true,
      shopName: 'Tan Sang',
    },
    {
      id: 6,
      name: 'Áo thun nam',
      price: 100000,
      rate: 4,
      image:
        'https://down-vn.img.susercontent.com/file/vn-50009109-758d08efd9d3881636f31ceaf4f87749',
      address: 'Hà Nội',
      categories: [
        {
          id: 1,
          name: 'Iphone',
        },
        {
          id: 2,
          name: 'Apple',
        },
      ],
      isFavorite: true,
      shopName: 'Tan Sang',
    },
  ];

  const [products, setProducts] = useState([{}]);
  useEffect(() => {
    async function fetchData() {
      const url = `${BASE_URL}/products`;
      const response = await axios.get(url, {
        withCredentials: true,
      });

      setProducts(response.data);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.innerContent}>
        <Slider />
        <div>
          <h2>Danh Sách Các Thể Loại</h2>
          <div className={styles.listCategoryCard}>
            <CategoryCard
              title={'Điện thoại'}
              image={cat1}
            />
            <CategoryCard
              title={'Thời trang'}
              image={cat2}
            />
            <CategoryCard
              title={'Du lịch'}
              image={cat3}
            />
            <CategoryCard
              title={'Nội thất'}
              image={cat4}
            />
            <CategoryCard
              title={'Thể thao'}
              image={cat5}
            />
            <CategoryCard
              title={'Làm đẹp'}
              image={cat6}
            />
          </div>
        </div>

        <ProductList label='Gợi ý cho bạn' data={products} />

        <ProductList label='Các sản phẩm phổ biến' data={products} />

        <ProductList label='Các sản phẩm bán chạy' data={products} />

        <ProductList label='Lịch sử tìm kiếm' data={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Content;
