import styles from  './style.module.scss';
import {
    BrandingWatermark, Gamepad,
    Laptop,
    LocalTaxi,
    ShopOutlined,
    Smartphone, Toys,
    Watch
} from "@material-ui/icons";
import CategoryItem from "../../../components/CategoryItem";
const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <CategoryItem categoryName="Laptop">
        <Laptop/>
      </CategoryItem>
      <CategoryItem categoryName="Smartphone & Tablet">
        <Smartphone/>
      </CategoryItem>
      <CategoryItem categoryName="Video Game">
        <Gamepad/>
      </CategoryItem>
      <CategoryItem categoryName="Book & Media">
        <ShopOutlined/>
      </CategoryItem>
      <CategoryItem categoryName="Accessory">
        <BrandingWatermark/>
      </CategoryItem>
      <CategoryItem categoryName="Car & Bike & Bicycle">
        <LocalTaxi/>
      </CategoryItem>
      <CategoryItem categoryName="Watch & Jewelry">
        <Watch/>
      </CategoryItem>
      <CategoryItem categoryName="Toys & Children">
        <Toys/>
      </CategoryItem>
    </div>
  )
}

export default Sidebar;