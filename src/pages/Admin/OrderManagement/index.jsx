import React from 'react';
import CustomTable from '../../../components/Table';

const OrderManagement = () => {
  const data = [
    {
      id: 1,
      Amount: 2598,
      status: 'Completed',
    },
    {
      id: 2,
      Amount: 1199,
      status: 'In Progress',
    },
    {
      id: 3,
      Amount: 747,
      status: 'Pending',
    },
    {
      id: 4,
      Amount: 3899,
      status: 'Completed',
    },
    {
      id: 5,
      Amount: 598,
      status: 'Completed',
    },
    {
      id: 6,
      Amount: 229,
      status: 'In Progress',
    },
    {
      id: 7,
      Amount: 516,
      status: 'Completed',
    },
    {
      id: 8,
      Amount: 698,
      status: 'Pending',
    },
    {
      id: 9,
      Amount: 599,
      status: 'Completed',
    },
    {
      id: 10,
      Amount: 1347,
      status: 'In Progress',
    },
  ];

  const onEditOrder = id => {
    console.log('edit product', id);
  };

  const onDeleteOrder = id => {
    console.log('delete product', id);
  };

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  return (
    <CustomTable
      data={data}
      pageSizeOptions={pageSizeOptions}
      onEdit={onEditOrder}
      onDelete={onDeleteOrder}
      title={'Product Management'}
    />
  );
};

export default OrderManagement;
