import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../hooks/useFetch";

const Products = () => {
    // const [ loading, setLoading ] = useState( false )
    // const [ error, setError ] = useState( false );
    // const [ products, setProducts ] = useState( [] );

/*    useEffect( () => {
        fetchData()
    }, [] )*/

    const { data, catchError, isLoading } = useFetch('https://fakestoreapi.com/products')

    /*const fetchData = async () => {
        setLoading( true );
        try {
            const response = await axios.get( 'https://fakestoreapi.com/products' );
            if ( response ) {
                setProducts( response.data );
                setError( false )
            }
        } catch ( e ) {
            if ( e ) {
                setError( e.message )
                setProducts( null )
            }
        } finally {
            setLoading( false );
        }*/
    // }

    return (
        <>
            <ul className="product-list">
                { data.map( product => {
                        return (
                            <ProductCard
                                key={ product.id }
                                product={ product }
                            />
                        )
                    }
                )
                }
            </ul>
        </>
    );
};

export default Products;