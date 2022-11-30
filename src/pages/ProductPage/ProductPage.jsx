import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const { id } = useParams()
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false );
    const [ product, setProduct ] = useState( [] );

    useEffect( () => {
        fetchData()
    }, [] )

    const fetchData = async () => {
        setLoading( true );
        try {
            const response = await axios.get( "https://fakestoreapi.com/products/" + id );
            if ( response ) {
                setProduct( response.data );
                setError( false )
            }
        } catch ( e ) {
            if ( e ) {
                setError( e.message )
                setProduct( null )
            }
        } finally {
            setLoading( false );
        }
    }
    const { title, image, price, description } = product;
    return (
        <>
            <div className="product-page">
                <img src={ image } alt={ title  }/>
                <h2>{ title }</h2>
                <p>{ description }</p>
                <div>
                    <span>€{ price }</span>
                    <button type="button">Add to card</button>
                </div>
            </div>
        </>
    );
};

export default ProductPage;