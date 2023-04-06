import React from 'react';
import './Item.scss';

const Item = ({ brand, model, price, imgUrl }) => {
  return (
    <div className='item'>
      <img src={imgUrl} alt={brand} />
      <div className='item-details'>
        <span className='brand'>{brand}</span>
        <span className='model'>{model}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default Item;
