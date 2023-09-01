import { Box, Checkbox, Stack } from '@mui/material';
import classes from './styles.module.scss';
import { Divider } from '@material-ui/core';
import {
  ParagraphBpdy,
  ProductNameCart,
  ProductPrice,
  ShopName,
} from '../SearchPage/components';
import { fCurrency } from '../../utils';
import QuantityInput from '../../components/QuantityInput';
import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import ConfirmDialog from '../../components/ConfirmDeleteCartDialog';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ShopCartProduct = props => {
  const { shop, onSelected, idxShop } = props;
  const [dumbState, setDumbState] = useState(0);
  const [selectedProducts, setSelectedProduct] = useState([]);
  const [productRemove, setProductRemove] = useState(-1);

  const onQuantityChange = (val, idx) => {
    shop.products[idx].quantity = val;
    setDumbState(Math.random());
  };

  const onDeleteProduct = idx => {
    shop.products.splice(idx, 1);
    if (shop.products.length <= 0) setDisplay(false);
  };

  const [display, setDisplay] = useState(true);
  const onSelectProduct = (e, idx) => {
    if (e.currentTarget.checked && selectedProducts.indexOf(idx) < 0) {
      setSelectedProduct(prev => [...prev, idx]);
    } else {
      setSelectedProduct(prev => {
        const newSelected = prev.filter(item => item !== idx);
        return newSelected;
      });
    }
  };

  useEffect(() => {
    onSelected?.(idxShop, selectedProducts);
  }, [selectedProducts]);
  const onCancelDelete = () => setProductRemove(-1);
  return (
    <>
      {display && (
        <Box>
          <Stack direction='row' alignItems='center' sx={{ mb: 1 }}>
            <Checkbox {...label} />
            <ShopName>{shop.shopName}</ShopName>
          </Stack>
          <Divider />
          <Stack>
            {shop.products.map((product, idx) => (
              <Stack
                direction='row'
                alignItems='center'
                spacing={2}
                sx={{ mt: 1, px: '20px', py: '16px' }}
              >
                <Checkbox {...label} onChange={e => onSelectProduct(e, idx)} />
                <Stack
                  direction='row'
                  alignItems='center'
                  spacing={2}
                  sx={{ width: '45%' }}
                >
                  <img
                    className={classes.productImg}
                    src={product.image}
                    alt=''
                    srcset=''
                  />
                  <ProductNameCart>{product.name}</ProductNameCart>
                </Stack>
                <ProductPrice sx={{ width: '10%' }}>
                  {fCurrency(product.price)}
                </ProductPrice>
                <Box sx={{ width: '15%' }}>
                  <QuantityInput
                    className={classes.quantityInput}
                    currentValue={product.quantity}
                    idx={idx}
                    onQuantityChange={onQuantityChange}
                  />
                </Box>
                <ProductPrice sx={{ width: '15%', textAlign: 'center' }}>
                  {fCurrency(product.price * product.quantity)}
                </ProductPrice>
                <Button
                  onClick={() => setProductRemove(idx)}
                  className={classes.delBtn}
                  type='primary'
                  danger
                  icon={<DeleteOutlined />}
                />
              </Stack>
            ))}
          </Stack>
          <ConfirmDialog
            open={productRemove >= 0}
            productName={shop?.products[productRemove]?.name}
            idx={productRemove}
            onYes={onDeleteProduct}
            onClose={onCancelDelete}
          />
        </Box>
      )}
    </>
  );
};

export default ShopCartProduct;
