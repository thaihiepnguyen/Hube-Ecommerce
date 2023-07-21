import React from 'react';
import CustomTable from '../../../components/Table';

const UserManagement = () => {
  const data = [
    {
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      id: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ];

  const onEditUser = id => {
    console.log('edit user', id);
  };

  const onDeleteUser = id => {
    console.log('delete user', id);
  };

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  return (
    <CustomTable
      data={data}
      pageSizeOptions={pageSizeOptions}
      onEdit={onEditUser}
      onDelete={onDeleteUser}
      title={'User Management'}
    />
  );
};

export default UserManagement;
