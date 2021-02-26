import React from 'react';

import Button from '@material-ui/core/Button';
import {useDispatch, useSelector } from "react-redux";
import {add} from "../stores/counterSlice"
import { ProductItem } from "../types/ProductItemtypes"

function Product() {
    const dispatch = useDispatch();
    const products = useSelector((state: ProductItem[]) => state)
 


    return (
        <div>
            <div className="productContainer">
                {(products).map((shoe:any)=>{
               
                    return (
                        <div key={shoe.id}  className="link" >
                           
                            {/* to={`/product/${keyName}`}> */}
                                <h4>{shoe.name}</h4>
                                <img src={shoe.img} height={150} alt="shoe" />
                                <br/>
                                
                                
                                <Button onClick={() => dispatch(add(shoe))} style={{marginTop:"20px"}}variant="contained" color="primary">
  Add To Cart
</Button>
</div>)
                })}
            </div>
        </div>
    );
}

export default Product;
