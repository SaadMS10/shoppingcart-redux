import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from '../json/shoes.json';

function ProductItem() {
    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1>{shoe.name}</h1>
            <div className="link">
               
                <img src={shoe.img} height={500} alt="shoe" />
                
            </div>
        </div>
    );
}

export default ProductItem;
