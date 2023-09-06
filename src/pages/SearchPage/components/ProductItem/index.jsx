import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { ParagraphBpdy } from '..';
import { Box, Rating } from '@mui/material';
import classes from "./styles.module.scss"
import Button from '../../../../components/Button';
import PriceConverter from '../../../../components/PriceConverter';

const ProductItem = (props) => {
  const {id, name, price, rate, image, address} = props.product
  return (
    <Card sx={{ maxWidth: 230, p: "0" }}>
      <Box className={classes.imageWrapper}>
        <CardMedia
          className={classes.productImg}
          sx={{ height: 260, width: 230, backgroundSize: "contain" }}
          image={image}
          title="green iguana"
        />
        <div className={classes.buttonGroup}>
          <Button buttonClassName={classes.button}>Thêm vào giỏ hàng</Button>
        </div>
      </Box>
      <CardContent sx={{ p: "8px 24px 16px !important" }}>
        <ParagraphBpdy className={classes.productName}>
          {name}
        </ParagraphBpdy>
        <ParagraphBpdy sx={{ mt: 1, color: "#DF4949", fontSize: "18px !important" }}>
          <PriceConverter>{price}</PriceConverter>
        </ParagraphBpdy>
        <Rating name="read-only" precision={0.5} value={rate} readOnly sx={{ my: 1 }} />
        <ParagraphBpdy sx={{ mt: 1, justifyContent: "flex-end"}}> 
          {address}
        </ParagraphBpdy>
      </CardContent>
    </Card>
  )
}

export default ProductItem; 