import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Cpmponets/Breadcrums/Breadcrums';
import all_product from '../Cpmponets/assets/all_product';

const Product = () => {
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
        <Breadcrums product={product}/>
    </div>
  )
}

export default Product;
