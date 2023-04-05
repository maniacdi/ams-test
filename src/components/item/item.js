import React from 'react';

const Item = ({ name, price, imageUrl }) => {
  return (
    <div className='item'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
};

export default Item;
