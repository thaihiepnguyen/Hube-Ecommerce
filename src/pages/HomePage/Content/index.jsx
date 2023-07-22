import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Slider from './Slider';
import Footer from '../../../components/Footer';
import ProductList from '../../../components/ProductList';
import { getCategories } from '../../../api/category';
import CategoryCard from '../../../components/CategoryCard';
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
  return (
    <div className={styles.contentContainer}>
      <Slider />

      <div className={styles.categoriesContainer}>
        <h2>Danh Sách Các Thể Loại</h2>
        <div className={styles.listCategoryCard}>
          {categories2 &&
            categories2.map((item, index) => (
              <CategoryCard key={index} title={item.name} image={item.image} />
            ))}
        </div>
      </div>

      <ProductList label='Gợi ý cho bạn' data={data} />

      <ProductList label='Các sản phẩm phổ biến' data={data} />

      <ProductList label='Các sản phẩm bán chạy' data={data} />

      <ProductList label='Lịch sử tìm kiếm' data={data} />

      <Footer />
    </div>
  );
};

export default Content;
