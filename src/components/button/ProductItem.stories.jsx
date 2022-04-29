import React from 'react';
import '../../stylesheets/product-item.scss';
import { ProductItem } from './ProductItem';

export default {
  title: 'Product Item',
  component: ProductItem
};

export const Primary = () => <ProductItem style="product-item"/>;