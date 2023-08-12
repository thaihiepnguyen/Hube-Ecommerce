import Navbar from "../../components/Navbar";
import classes from './styles.module.scss'
import Footer from "../../components/Footer";
import { Box, Checkbox, FormControlLabel, FormGroup } from "@material-ui/core";
import FilterBox from "./components/FilterBox";
import { ParagraphBpdy } from "./components";
import { useState } from "react";
import { Rating } from "@mui/material";

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
  return (
    
    <Box className={classes.contentContainer}>
      <Navbar />
      <Box sx={{ mt: "75px" }} />
      <Box className={classes.content}>
        <Box className={classes.leftFilter}>
          <FilterBox/>
        </Box>
      </Box>
      <Footer/>
    </Box>


  )
}

export default SearchPage; 