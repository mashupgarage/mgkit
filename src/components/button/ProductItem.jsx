import React from 'react';

export function ProductItem({ style }) {
  return (
  <div class={style}>
			<a class="cart-button" href="#" aria-hidden="true">
				<span> x </span>
			</a>
			<a class="product-container" href="#">
				<div class="image-container">
					<img class="product-image" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1584&q=80" alt="Product Item" />
        </div>
			<div class="product-details">
				<div class="category">Product Category</div>
				<div class="name">Product Name</div>
				<div class="price">$1000000</div>
			</div>
		</a>
	</div>
  );
}