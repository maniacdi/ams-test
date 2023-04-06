import React, { useState } from 'react';
import useItems from '../../hooks/useItems';
import Search from '../../components/search/Search';
import Item from '../../components/item/Item';
import './ItemList.scss';

const ItemList = () => {
  const { products, loading, error } = useItems();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1);
  };

  if (loading) {
    return <div className='item-list-page'>Loading products...</div>;
  }

  if (error) {
    return <div className='item-list-page'>Error: {error}</div>;
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

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='item-list-page'>
      <div className='item-search'>
        <Search handleSearch={handleSearch} />
      </div>
      <div className='item-list'>
        {currentItems.map((product) => (
          <div className='item-wrapper' key={product.id}>
            <Item
              id={product.id}
              brand={product.brand}
              model={product.model}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }).map((_, index) => {
          if (
            index === 0 ||
            index === totalPages - 1 ||
            (index >= currentPage - 2 && index <= currentPage + 2)
          ) {
            return (
              <button
                key={index}
                className={currentPage === index + 1 ? 'active' : ''}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            );
          } else if (index === currentPage - 3 || index === currentPage + 3) {
            return <span key={index}>...</span>;
          }
        })}
      </div>
    </div>
  );
};

export default ItemList;
