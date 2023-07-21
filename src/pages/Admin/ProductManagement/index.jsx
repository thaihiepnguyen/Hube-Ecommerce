import React from 'react';
import CustomTable from '../../../components/Table';

const ProductManagement = () => {
  const data = [
    {
      id: 1,
      name: 'iPhone 12 Pro',
      price: 1299,
      quantity: 5,
      category: 'Electronics',
      description:
        'The iPhone 12 Pro features a Super Retina XDR display, A14 Bionic chip, and a triple-camera system with LiDAR Scanner.',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21 Ultra',
      price: 1199,
      quantity: 3,
      category: 'Electronics',
      description:
        'The Samsung Galaxy S21 Ultra is a powerful Android smartphone with a 108MP camera, 100x Space Zoom, and a massive 6.8-inch display.',
    },
    {
      id: 3,
      name: 'AirPods Pro',
      price: 249,
      quantity: 10,
      category: 'Electronics',
      description:
        'AirPods Pro feature Active Noise Cancellation, Transparency mode, and customizable silicone tips for a comfortable fit.',
    },
    {
      id: 4,
      name: 'Canon EOS R5',
      price: 3899,
      quantity: 2,
      category: 'Electronics',
      description:
        'The Canon EOS R5 is a professional full-frame mirrorless camera with 8K video recording, 45MP resolution, and advanced autofocus capabilities.',
    },
    {
      id: 5,
      name: 'Nintendo Switch',
      price: 299,
      quantity: 8,
      category: 'Gaming',
      description:
        'The Nintendo Switch is a hybrid gaming console that can be used both as a handheld device and connected to a TV for a versatile gaming experience.',
    },
    {
      id: 6,
      name: 'Fitbit Versa 3',
      price: 229,
      quantity: 6,
      category: 'Fitness',
      description:
        'The Fitbit Versa 3 is a feature-packed smartwatch with built-in GPS, heart rate monitoring, sleep tracking, and support for voice assistants.',
    },
    {
      id: 7,
      name: 'Kindle Paperwhite',
      price: 129,
      quantity: 4,
      category: 'Electronics',
      description:
        'The Kindle Paperwhite is a popular e-reader with a high-resolution display, built-in adjustable light, and waterproof design for reading anywhere.',
    },
    {
      id: 8,
      name: 'Sony WH-1000XM4',
      price: 349,
      quantity: 7,
      category: 'Electronics',
      description:
        'The Sony WH-1000XM4 is a top-of-the-line wireless noise-canceling headphone with exceptional sound quality, long battery life, and smart features.',
    },
    {
      id: 9,
      name: 'Dyson V11 Absolute',
      price: 599,
      quantity: 1,
      category: 'Home Appliances',
      description:
        'The Dyson V11 Absolute is a cordless stick vacuum cleaner with powerful suction, intelligent cleaning modes, and up to 60 minutes of runtime.',
    },
    {
      id: 10,
      name: 'GoPro Hero9 Black',
      price: 449,
      quantity: 3,
      category: 'Electronics',
      description:
        'The GoPro Hero9 Black is a versatile action camera with 5K video recording, 20MP photos, and a front-facing display for easy vlogging.',
    },
  ];

  const onEditProduct = id => {
    console.log('edit product', id);
  };

  const onDeleteProduct = id => {
    console.log('delete product', id);
  };

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  return (
    <CustomTable
      data={data}
      pageSizeOptions={pageSizeOptions}
      onEdit={onEditProduct}
      onDelete={onDeleteProduct}
      title={'Product Management'}
    />
  );
};

export default ProductManagement;
