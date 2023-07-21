import React, {useEffect, useState} from 'react';
import CustomTable from '../../../components/Table';
import {BASE_URL} from "../../../App";
import axios from "axios";

const DiscountManagement = () => {
  // const data = [
  //   {
  //     id: 1,
  //     code: 'SUMMER10',
  //     percentage: 10,
  //     description: 'Get 10% off on all summer items.',
  //   },
  //   {
  //     id: 2,
  //     code: 'FREESHIP',
  //     percentage: 100,
  //     description: 'Free shipping on orders over $100.',
  //   },
  //   {
  //     id: 3,
  //     code: 'SALE20',
  //     percentage: 20,
  //     description: 'Enjoy 20% off on selected items during the sale.',
  //   },
  //   {
  //     id: 4,
  //     code: 'WELCOME15',
  //     percentage: 15,
  //     description: 'Welcome discount of 15% for new customers.',
  //   },
  //   {
  //     id: 5,
  //     code: 'CLEARANCE50',
  //     percentage: 50,
  //     description: 'Clearance sale! Get 50% off on clearance items.',
  //   },
  //   {
  //     id: 6,
  //     code: 'BUNDLE25',
  //     percentage: 25,
  //     description: 'Buy 2 or more items and get 25% off on the total.',
  //   },
  //   {
  //     id: 7,
  //     code: 'LOYALTY10',
  //     percentage: 10,
  //     description: 'Exclusive 10% discount for our loyal customers.',
  //   },
  // ];

  const [coupons, setCoupons] = useState([{}]);

  useEffect(() => {
    const url = `${BASE_URL}/coupons`;
    axios.get(url, {
      withCredentials: true
    })
      .then(function (response) {
        setCoupons(response.data)
      }).catch((e) => {
      console.error(e.message);
    })
  }, [])
  const onEditDiscount = id => {
    console.log('edit product', id);
  };

  const onDeleteDiscount = id => {
    console.log('delete product', id);
  };

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  return (
    <CustomTable
      data={coupons}
      pageSizeOptions={pageSizeOptions}
      onEdit={onEditDiscount}
      onDelete={onDeleteDiscount}
      title={'Discount Management'}
    />
  );
};

export default DiscountManagement;
