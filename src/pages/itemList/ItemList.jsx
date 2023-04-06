import React, { useState } from 'react';
import useItems from '../../hooks/useItems';
import Search from '../../components/search/Search';
import Item from '../../components/item/Item';
import './ItemList.scss';

const ItemList = () => {
  const { products, loading, error } = useItems();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter products based on the search term
  const filteredProducts = products.filter((product) => {
    const brandMatches = product.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const modelMatches = product.model
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return brandMatches || modelMatches;
  });

  return (
    <div className='item-list-page'>
      <div className='item-search'>
        <Search handleSearch={handleSearch} />
      </div>
      <div className='item-list'>
        {filteredProducts.map((product) => (
          <div className='item-wrapper' key={product.id}>
            <Item
              brand={product.brand}
              model={product.model}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
