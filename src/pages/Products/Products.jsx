import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
    const [ loading, setLoading ] = useState( false )
    const [ error, setError ] = useState( false );
    const [ data, setData ] = useState( [] );

    useEffect( () => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading( true );
            try {
                setError( false );
                const response = await axios.get( 'https://fakestoreapi.com/products', {
                    signal: controller.signal,
                } );
                setData( response.data );
            } catch ( e ) {
                // console.error( e )
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

    return (
        <>
            { loading && <p>Loading...</p> }
            { error && <p>Error: Could not fetch data!</p> }

            <ul className="product-list">
                { data.map( product => {
                    return (
                        <li className="product-card" key={ product.id }>
                            <Link to={ `/products/${ product.id }` }>
                                <div>
                                    <img src={ product.image } alt={ product.title }/>
                                    <h3>{ product.title.slice( 0, 25 ) }</h3>
                                </div>
                                <span>€ { product.price }</span>
                            </Link>
                        </li>
                    )
                } ) }
            </ul>
        </>
    );
};

export default Products;