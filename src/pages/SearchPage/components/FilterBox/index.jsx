import classes from './styles.module.scss'
import { Box, Checkbox, ClickAwayListener, FormControlLabel, FormGroup, Popper } from "@material-ui/core";

import { useState } from "react";
import { Rating } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { ParagraphBpdy } from '..';
import { KeyboardArrowDown, KeyboardArrowRight } from '@material-ui/icons';
import { Divider } from 'antd';
import { Stack } from 'immutable';
const brands = [
  'Samsung',
  'Apple',
  'Xiaomi',
  'OPPO',
  'Vivo',
];
const cities = {
  "A": ["An Giang"],
  "B": ["Bình Thuận", "Bạc Liêu", "Bắc Giang", "Bắc Kạn", "Bắc Ninh", "Bến Tre"],
  "C": ["Cao Bằng", "Cà Mau", "Cần Thơ"],
  "Đ": ["Đà Nẵng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp"],
  "G": ["Gia Lai"],
  "H": ["Hà Giang", "Hà Nam", "Hà Nội", "Hà Tĩnh", "Hải Dương", "Hải Phòng", "Hậu Giang", "Hòa Bình", "Hưng Yên"],
  "K": ["Khánh Hòa", "Kiên Giang", "Kon Tum"],
  "L": ["Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An"],
  "M": ["Nam Định"],
  "N": ["Nghệ An", "Ninh Bình", "Ninh Thuận"],
  "P": ["Phú Thọ", "Phú Yên"],
  "Q": ["Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị"],
  "S": ["Sóc Trăng", "Sơn La"],
  "T": ["Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang"],
  "V": ["Vĩnh Long", "Vĩnh Phúc"],
  "Y": ["Yên Bái"]
}

const FilterBox = () => {
  const [valueRating, setValueRating] = useState(0)
  const [menuSearchPlace, setMenuSearchPlace] = useState(null)
  const [moreCategory, setMoreCategory] = useState(false)
  const [moreBrand, setMoreBrand] = useState(false)
  const cityKeys = Object.keys(cities);
  const handleScrollPlace = (city)=>{
    const cityBox = document.getElementById("cityBox")
    const scrollSection = document.getElementById(city)
    cityBox.scrollTo({
      top: scrollSection.offsetTop - 30,
      behavior: 'smooth',
    });
  }
  return (
    <Box className={classes.leftFilter}>
      <ParagraphBpdy><FilterAltIcon />Bộ lọc tìm kiếm</ParagraphBpdy>
      <Box className={classes.filterOption}>
        <ParagraphBpdy>Rating</ParagraphBpdy>
        <Rating
          sx={{mt: 2}}
          name="simple-controlled"
          precision={0.5}
          value={valueRating}
          onChange={(event, newValue) => {
            setValueRating(newValue);
          }}
        />
      </Box>
      <Divider className={classes.divider}/>
      <Box className={classes.filterOption}>
        <ParagraphBpdy>Danh mục</ParagraphBpdy>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Điện thoại" />
          <FormControlLabel control={<Checkbox />} label="Máy tính & laptop" />
          <FormControlLabel control={<Checkbox />} label="Thiết bị điện tử" />
          <FormControlLabel control={<Checkbox />} label="Đồng hồ" />
          {!moreCategory ? <ParagraphBpdy sx={{mt: 1, cursor: "pointer"}} onClick={()=>setMoreCategory(true)} >Thêm +</ParagraphBpdy> : (
            <>
              <FormControlLabel control={<Checkbox />} label="Thiết bị điện gia dụng" />
              <FormControlLabel control={<Checkbox />} label="Bảo vệ màn hình" />
              <FormControlLabel control={<Checkbox />} label="Ốp lưng, bao da, bookcover" />
              <FormControlLabel control={<Checkbox />} label="Cáp & bộ sạc" />
            </>
          ) }
        </FormGroup>
      </Box>
      <Divider className={classes.divider}/>
      <Box className={classes.filterOption}>
        <ParagraphBpdy>Nơi Bán</ParagraphBpdy>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Hà Nội" />
          <FormControlLabel control={<Checkbox />} label="TP. Hồ Chí Minh" />
          <ClickAwayListener onClickAway={() => { setMenuSearchPlace(null) }}>
            <Box>
              <ParagraphBpdy sx={{ cursor: "pointer", width: "fit-content", mt: 1 }} onClick={(e) => setMenuSearchPlace(e.target)}>Khác<KeyboardArrowRight /></ParagraphBpdy>
              <Popper open={Boolean(menuSearchPlace)} anchorEl={menuSearchPlace} placement='right'>
                <Box className={classes.menuSearchPlace} id='cityBox'>
                  <ParagraphBpdy>Tỉnh / Thành phố</ParagraphBpdy>
                  <Divider />
                  <Box sx={{mt: "-16px"}} className={classes.searchCity}>
                    <Box>
                      {cityKeys.map(city => (
                        <>
                          <ParagraphBpdy id={city} sx={{ mt: "16px" }} >{city}</ParagraphBpdy>
                          <FormGroup className={classes.cbGroup}>
                            {cities[city].map(cityName => (
                              <FormControlLabel control={<Checkbox />} label={cityName} />
                            ))}

                          </FormGroup>
                        </>
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", gap: "8px", flexDirection: "column", position: "absolute", right: "40px" }}>
                      {cityKeys.map(city => <ParagraphBpdy sx={{cursor: "pointer"}} onClick={()=>handleScrollPlace(city)}>{city}</ParagraphBpdy>)}
                    </Box>
                  </Box>
                  <Box></Box>
                </Box>
              </Popper>
            </Box>
          </ClickAwayListener>
        </FormGroup>
      </Box>
      <Divider className={classes.divider}/>
      <Box className={classes.filterOption}>
        <ParagraphBpdy>Thương hiệu</ParagraphBpdy>
        <FormGroup>
          {brands.map((brand) => <FormControlLabel control={<Checkbox />} label={brand} />)}
        </FormGroup>
      </Box>




    </Box >


  )
}

export default FilterBox; 