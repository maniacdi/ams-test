import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";
/* Component that represents an element in the list of products*/

// eslint-disable-next-line react/prop-types
const Item = ({ id, brand, model, price, imgUrl }) => {
  return (
    <div className="item">
      <Link to={`/item/${id}`}>
        <img src={imgUrl} alt={brand} />
        <div className="item-details">
          <span className="brand">{brand}</span>
          <span className="model">{model}</span>
          <span className="price">{price ? price : 0}</span>
        </div>
      </Link>
    </div>
  );
};

export default Item;
