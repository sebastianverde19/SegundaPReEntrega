
/* import React from 'react';
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({ itemSelected }) => {
  return (
    <div className='card-container'> 
      <h3 className='card-title'>{itemSelected?.title}</h3>
      <img src={itemSelected?.img} alt={itemSelected?.title} />
      <p>{itemSelected?.description}</p>
      <p>${itemSelected?.price}</p>
      <ItemCount />
    </div>
      
  );
};


export default ItemDetail;  */

import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ itemSelected }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoading(false);
    img.src = itemSelected?.img;
  }, [itemSelected]);

  return (
    <div className='card-container'>
      <h3 className='card-title'>{itemSelected?.title}</h3>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <img src={itemSelected?.img} alt={itemSelected?.title} />
      )}
      <p>{itemSelected?.description}</p>
      <p>${itemSelected?.price}</p>
      <ItemCount />
    </div>
  );
};

export default ItemDetail;





