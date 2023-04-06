import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useItem from '../../hooks/useItem';
import './ItemDetail.scss';

const ItemDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useItem(id);

  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  const handleStorageChange = (event) => {
    const selectedStorageCode = parseInt(event.target.value);
    const selectedStorageOption = product.options.storages.find(
      (option) => option.code === selectedStorageCode
    );
    setSelectedStorage(selectedStorageOption);
  };

  const handleColorChange = (event) => {
    const selectedColorCode = parseInt(event.target.value);
    const selectedColorOption = product.options.colors.find(
      (option) => option.code === selectedColorCode
    );
    setSelectedColor(selectedColorOption);
  };

  const handleAddToCart = () => {
    // Make API call to add product to cart
  };
  useEffect(() => {
    if (product) {
      setSelectedStorage(product.options.storages.map((option) => option));
      setSelectedColor(product.options.colors.map((option) => option));
    }
  }, [product]);
  if (loading) {
    return <div className='item-detail-page'>Loading product...</div>;
  }

  if (error) {
    return <div className='item-detail-page'>Error: {error}</div>;
  }
  return (
    <div className='item-detail-page' data-testid='item-detail'>
      <div className='item-image'>
        <img src={product.imgUrl} alt={product.model} />
      </div>
      <div className='item-description'>
        <div className='item-brand'>{product.brand}</div>
        <div className='item-model'>{product.model}</div>
        <div className='item-price'>{product.price} €</div>
        {product.cpu && <div className='item-cpu'>CPU: {product.cpu}</div>}
        {product.ram && <div className='item-ram'>RAM: {product.ram} GB</div>}
        {product.os && (
          <div className='item-os'>Sistema Operativo: {product.os}</div>
        )}
        {product.screen && (
          <div className='item-screen'>
            Resolución de pantalla: {product.screen}
          </div>
        )}
        {product.battery && (
          <div className='item-battery'>Batería: {product.battery} mAh</div>
        )}
        {product.cameras && (
          <div className='item-cameras'>Cámaras: {product.cameras}</div>
        )}
        {product.dimensions && (
          <div className='item-dimensions'>
            Dimensiones: {product.dimensions}
          </div>
        )}
        {product.weight && (
          <div className='item-weight'>Peso: {product.weight} g</div>
        )}
        <div className='item-options'>
          <div className='item-option'>
            <div className='item-option-label'>Storage:</div>
            <div className='item-option-selector'>
              <select
                value={selectedStorage.code}
                onChange={handleStorageChange}
              >
                {product.options.storages.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='item-option'>
            <div className='item-option-label'>Color:</div>
            <div className='item-option-selector'>
              <select value={selectedColor.code} onChange={handleColorChange}>
                {product.options.colors.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='item-add-to-cart'>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
