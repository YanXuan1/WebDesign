import React from 'react'
import { Link } from "react-router-dom";
import "./adminPruducts.css";

const Product = ({ imageUrl, description, price, name, productId,countInStock,deleteProduct}) => {
  return (
    
      <tr>
        <td width={150} height={100}><img src={imageUrl} alt={name} /></td>
        <td>{name}</td>
        <td>{description.substring(0, 100)}...</td>
        <td>{countInStock}</td>

        <td>{price}</td>
        
        <td><button type="button" class="delBtn" onClick={() => deleteProduct(productId)}>Delete</button></td>
        <td><Link to={`/updataProduct/${productId}`} className="info__button">Edit</Link></td>
      </tr>
  );
};

export default Product;