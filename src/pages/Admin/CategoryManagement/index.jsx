import React, {useEffect, useState} from 'react';
import CustomTable from '../../../components/Table';
import {BASE_URL} from "../../../App";
import axios from "axios";

const CategoryManagement = () => {
  // const data = [
  //   {
  //     id: 1,
  //     name: 'Electronics',
  //     description: 'Explore a wide range of electronic devices and gadgets.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Fashion',
  //     description: 'Discover the latest fashion trends and styles.',
  //   },
  //   {
  //     id: 3,
  //     name: 'Home & Kitchen',
  //     description: 'Find everything you need to enhance your home and kitchen.',
  //   },
  //   {
  //     id: 4,
  //     name: 'Beauty & Personal Care',
  //     description: 'Discover beauty products and personal care essentials.',
  //   },
  //   {
  //     id: 5,
  //     name: 'Sports & Outdoors',
  //     description: 'Explore a variety of sports equipment and outdoor gear.',
  //   },
  // ];

  const [categories, setCategories] = useState([{}])
  useEffect(() => {
    const url = `${BASE_URL}/categories`;
    axios.get(url, {
      withCredentials: true
    })
      .then(function (response) {
        setCategories(response.data)
      }).catch((e) => {
      console.error(e.message);
    })
  }, [])

  const onEditCategory = id => {
    console.log('edit product', id);
  };

  const onDeleteCategory = id => {
    console.log('delete product', id);
  };

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  return (
    <CustomTable
      data={categories}
      pageSizeOptions={pageSizeOptions}
      onEdit={onEditCategory}
      onDelete={onDeleteCategory}
      title={'Category Management'}
    />
  );
};

export default CategoryManagement;
