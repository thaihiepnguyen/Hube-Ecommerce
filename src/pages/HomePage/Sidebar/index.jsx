import styles from  './style.module.scss';
import {
  BrandingWatermark, Gamepad,
  Laptop,
  LocalTaxi,
  ShopOutlined,
  Toys,
  Watch,
  EvStation, LocalHospital, HomeWork, Bookmark, Build, Sports, Tablet, DesktopMac, Highlight, CardTravel
} from "@material-ui/icons";
import CategoryItem from "../../../components/CategoryItem";
import axios from 'axios';
import {useEffect, useState} from "react";

const BASE_URL = process.env.REACT_APP_API_URL;
const categoriesIcon = [
  <Gamepad/>,
  <Laptop/>,
  <LocalHospital/>,
  <EvStation/>,
  <CardTravel/>,
  <HomeWork/>,
  <Bookmark/>,
  <Sports/>,
  <Highlight/>,
];

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

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
  return (
    <div className={styles.sidebarContainer}>
      {
        categories.map((item, index) => (
          <div key={item._id}>
            <CategoryItem categoryName={item.name}>
              {categoriesIcon[index]}
            </CategoryItem>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar;