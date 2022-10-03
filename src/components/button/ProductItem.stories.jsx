import React from 'react';
import '../../stylesheets/product-item.scss';
import { ProductItem } from './ProductItem';

export default {
  title: 'Components/Product Item',
  component: ProductItem
};

export const Primary = () => <ProductItem style="product-item"/>;
export const Light = () => <ProductItem style="product-item -light"/>;
