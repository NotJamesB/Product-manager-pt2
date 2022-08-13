import React, { useState} from 'react'
import CreateProduct from '../components/PersonForm'
import ShowAll from '../components/ShowAll';

const Main = (props) =>{
    const [product, setProduct] = useState([]);
    return (
        <div>
            <CreateProduct product={product} setProduct={setProduct}/>
            <ShowAll productList={product}  setProductList={setProduct}></ShowAll>
        </div>
    );
};
export default Main;