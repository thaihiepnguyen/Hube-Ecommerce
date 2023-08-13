import Navbar from "../../components/Navbar";
import classes from './styles.module.scss'
import Footer from "../../components/Footer";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import FilterBox from "./components/FilterBox";
import { ParagraphBpdy } from "./components";
import { useState } from "react";
import { Pagination, Rating } from "@mui/material";
import { ProductData } from "./components/MockData"
import ProductItem from "./components/ProductItem";
const brands = [
  'Samsung',
  'Nokia',
  'Xiaomi',
  'OPPO',
  'Vivo',
  'Masstel',
  'Vsmart',
  'S-Mobile',
  'TECNO',
  'LG',
  'Realme',
  'Sony',
  'Google',
  'Huawei',
  'Sharp',
  'Meizu',
  'GOLY',
  'Panasonic',
  'Redmi',
  'FORME'
];

const SearchPage = () => {
  const [valueRating, setValueRating] = useState(0)
  const [page, setPage] = useState(1);
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const itemsPerPage = 10
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToDisplay = ProductData.slice(startIndex, endIndex);
  return (

    <Box className={classes.contentContainer}>
      <Navbar />
      <Box sx={{ mt: "75px" }} />
      <Box className={classes.content}>
        <Box className={classes.leftFilter}>
          <FilterBox />
        </Box>
        <Box className={classes.rightContent}>
          <Box sx={{ width: "100%", mt: 3 }}>
            <ParagraphBpdy>Kết quả tìm kiếm từ khóa “Điện thoại”</ParagraphBpdy>
          </Box>
          {productsToDisplay.map((product, index) => (
            <ProductItem key={product.id} product={product} />
          ))}
          <Box sx={{ width: "100%", mt: 3 }}>
            <Pagination className={classes.pagination} count={Math.ceil(ProductData.length / 12)} page={page} onChange={handleChange} ></Pagination>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>


  )
}

export default SearchPage; 