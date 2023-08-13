import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  Filler,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { ShoppingCart, LocalAtm } from '@material-ui/icons';
import { Button, Select } from 'antd';
import styles from './styles.module.scss';
import SellItem from '../components/SellItem';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler,
  Tooltip,
  Legend,
);

const Dashboard = () => {
  const topSellData = [
    {
      id: 1,
      name: 'Iphone 12',
      price: 1200,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg',
    },
    {
      id: 2,
      name: 'Iphone 13',
      price: 1400,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg',
    },
    {
      id: 3,
      name: 'Iphone 14',
      price: 1600,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg',
    },
    {
      id: 4,
      name: 'Iphone 15',
      price: 1800,
      image:
        'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg',
    },
  ];
  const salesData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],

    datasets: [
      {
        label: 'Sales statistics',
        data: [35, 45, 2, 88],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: '#5840BB',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Sales statistics',
        data: [12, 100, 3, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: '#5840BB',
        borderColor: '#FFE9EE',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const visitorData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    datasets: [
      {
        label: 'Unique Visitors',
        data: [12, 100, 3, 5, 45, 24, 12],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: '#5840BB',
        borderColor: '#5840BB',
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      responsive: true,
      y: {
        ticks: {
          stepSize: 20,
          color: '#41417c',
          font: {
            size: 14,
            weight: '400',
          },
        },
      },
      x: {
        ticks: {
          color: '#41417c',
          font: {
            size: 14,
            weight: '400',
          },
        },
      },
    },
  };

  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.boardContainer}>
        <div className={styles.leftBoard}>
          <div className={styles.summary}>
            <div className={styles.orders}>
              <ShoppingCart className={styles.icon} />
              <div className={styles.totalContainer}>
                <div className={styles.total}>23 789</div>
                <div className={styles.orderTitle}>Orders</div>
              </div>
              <div className={styles.new}>+20</div>
            </div>
            <div className={styles.profit}>
              <LocalAtm className={styles.icon} />
              <div className={styles.totalContainer}>
                <div className={styles.total}>{`$12 233 789`}</div>
                <div className={styles.orderTitle}>Profit</div>
              </div>
              <div className={styles.new}>+$ 12,840,00</div>
            </div>
          </div>
          <div className={styles.salesChart}>
            <div className={styles.chartHeader}>
              <div className={styles.chartTitle}>Sales Statistics</div>
              <Select
                defaultValue='Week'
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'yearly', label: 'Yearly' },
                ]}
              />
            </div>
            <Line data={salesData} options={options} />
          </div>
        </div>
        <div className={styles.rightBoard}>
          <div className={styles.topSell}>
            <div className={styles.chartHeader}>
              <div className={styles.chartTitle}>Top selling products</div>
              <Button type='primary'>See all</Button>
            </div>
            <div className={styles.topSellContainer}>
              {topSellData.map((item, index) => (
                <SellItem
                  key={item.id}
                  index={index + 1}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              ))}
            </div>
          </div>
          <div className={styles.visitorsChart}>
            <div className={styles.chartHeader}>
              <div className={styles.chartTitle}>Unique visitors</div>
              <Select
                defaultValue='Week'
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: 'daily', label: 'Daily' },
                  { value: 'weekly', label: 'Weekly' },
                  { value: 'monthly', label: 'Monthly' },
                  { value: 'yearly', label: 'Yearly' },
                ]}
              />
            </div>
            <Line data={visitorData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
