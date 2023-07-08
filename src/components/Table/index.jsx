import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Search, Add } from '@material-ui/icons';
import CustomButton from '../Button';
import { Table, Space, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CustomTable = props => {
  const { data, columnsDefault, pageSizeOptions, onEdit, onDelete, title } =
    props;
  const [searchText, setSearchText] = useState('');
  const [pageSize, setPageSize] = useState(10);

  const columnsName = Object.keys(data[0]);

  const columns = columnsName.map(item => {
    return {
      title: item.toUpperCase(),
      dataIndex: item,
      key: item,
      sorter: (a, b) => {
        if (typeof a[item] === 'string') {
          return a[item].localeCompare(b[item]);
        } else if (typeof a[item] === 'number') {
          return a[item] - b[item];
        } else {
          return 0;
        }
      },

      render: (text, record) => {
        if (item === 'id') {
          return (
            <a
              href='#'
              onClick={() => {
                onEdit(record?.id);
              }}
              className={styles.rowStyle}
            >
              {text}
            </a>
          );
        } else {
          return <div className={styles.rowStyle}>{text}</div>;
        }
      },
    };
  });

  columns.push({
    title: 'ACTION',
    key: 'action',
    render: (_, record) => (
      <Space size='middle'>
        <Button
          type='primary'
          icon={<EditOutlined />}
          style={{ backgroundColor: 'blue', borderColor: 'blue' }}
          onClick={() => onEdit(record?.id)}
        />
        <Button
          type='primary'
          danger
          icon={<DeleteOutlined />}
          style={{ backgroundColor: 'red', borderColor: 'red' }}
          onClick={() => onDelete(record?.id)}
        />
      </Space>
    ),
  });

  const handleSearch = value => {
    setSearchText(value);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
  };

  const filteredData = data.filter(item => {
    return Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <input
            className={styles.inputStyle}
            placeholder={' What are you looking for?'}
            onChange={e => handleSearch(e.target.value)}
          />
          <Search className={styles.searchStyle} />
        </div>
        <CustomButton
          buttonClassName={styles.radiusButton}
          className={styles.addButton}
        >
          <Add className={styles.addIcon} />
          Add {title.split(' ')[0]}
        </CustomButton>
      </div>
      <Table
        columns={columnsDefault ? columnsDefault : columns}
        dataSource={filteredData}
        pagination={{
          pageSize,
          pageSizeOptions,
          showSizeChanger: true,
          onShowSizeChange: handlePageSizeChange,
        }}
      />
    </>
  );
};

export default CustomTable;
