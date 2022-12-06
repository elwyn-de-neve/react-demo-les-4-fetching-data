import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = ( { product } ) => {
    const { id, image, title, price } = product;

    return (
        <>
            <Link to={ `/products/${ id }` } className="product-card">
                <div>
                    <img src={ image } alt={ title }/>
                    <h3>{ title.slice(0, 25) }</h3>
                </div>
                <span>€ { price }</span>
            </Link>

        </>
    );
};

export default ProductCard;