import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const ParagraphBpdy = styled(Typography)`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

export const ShopName = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
  color: #000;
`;

export const ProductNameCart = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  color: #000;
`;

export const ProductPrice = styled(Typography)`
  font-size: 14px;
  line-height: normal;
`;
export const CartHeader = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
`;
