import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false );
    const [ data, setData ] = useState( [] );

    const { id } = useParams()

    useEffect( () => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading( true );
            try {
                setError( false );
                const response = await axios.get( "https://fakestoreapi.com/products/" + id , {
                    signal: controller.signal,
                } );
                setData( response.data );
            } catch ( e ) {
                setError( true )

                if(axios.isCancel(e)){
                    console.log('The axios request was cancelled')
                } else {
                    console.error(e)
                }
            }
            setLoading( false );
        }
        fetchData()

        return function cleanup() {
            controller.abort();
        }
    }, [] )

    const { title, image, price, description } = data;
    return (
        <>
            { loading && <p>Loading...</p> }
            { error && <p>Error: Could not fetch data!</p> }

            <div className="product-page">
                <img src={ image } alt={ title }/>
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