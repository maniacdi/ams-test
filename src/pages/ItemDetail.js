import React from 'react';
import { useParams } from 'react-router-dom';
// import useItemDetail from '../hooks/useItem';
// import Item from '../components/item/item';

const ItemDetail = () => {
  // const { id } = useParams();
  // const { item, loading, error } = useItemDetail(id);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className='item-detail' data-testid='item-detail'>
      ITEM
      {/* <Item item={item} /> */}
    </div>
  );
};

export default ItemDetail;
