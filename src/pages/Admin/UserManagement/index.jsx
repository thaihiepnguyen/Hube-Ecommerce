import React, {useEffect, useState} from 'react';
import CustomTable from '../../../components/Table';
import {BASE_URL} from "../../../App";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([{
  }]);
  // const data = [
  //   {
  //     id: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //   },
  //   {
  //     id: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //   },
  //   {
  //     id: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sydney No. 1 Lake Park',
  //   },
  // ];

  useEffect(() => {
    const url = `${BASE_URL}/user/all`;
    axios.get(url, {
      withCredentials: true
    })
      .then(function (response) {
        setUsers(response.data)
      }).catch((e) => {
      console.error(e.message);
    })
  }, [])
  const onEditUser = id => {
    console.log('edit user', id);
  };

  const onDeleteUser = id => {
    console.log('delete user', id);
  };

  const pageSizeOptions = ['10', '20', '30', '40', '50'];

  return (
    <CustomTable
      data={users}
      pageSizeOptions={pageSizeOptions}
      onEdit={onEditUser}
      onDelete={onDeleteUser}
      title={'User Management'}
    />
  );
};

export default UserManagement;
