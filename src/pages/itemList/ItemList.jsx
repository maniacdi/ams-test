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
  const [sortType, setSortType] = useState('relevance');

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

  // Sort products based on the selected sort type
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortType === 'price-high-to-low') {
      return b.price - a.price;
    } else if (sortType === 'price-low-to-high') {
      return a.price - b.price;
    } else {
      // Default to sorting by relevance
      return 0;
    }
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setCurrentPage(1);
  };
  return (
    <div className='item-list-page'>
      <div className='item-filter'>
        <div className='sort-dropdown'>
          <label htmlFor='sort'>Sort by:</label>
          <select id='sort' value={sortType} onChange={handleSortChange}>
            <option value='relevance'>Relevance</option>
            <option value='price-high-to-low'>Price: High to Low</option>
            <option value='price-low-to-high'>Price: Low to High</option>
          </select>
        </div>
        <div className='item-search'>
          <Search handleSearch={handleSearch} />
        </div>
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
