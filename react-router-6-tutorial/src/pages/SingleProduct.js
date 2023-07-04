import React from 'react'
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    console.log(useParams());
    const { productId } = useParams();
    return (
        <section className='section product'>
            <h4>Product Details for productId : {productId}</h4>
            <Link to='/products'>Back to Products</Link>
        </section>
    );
};

export default SingleProduct