import { useEffect, useRef, useState } from "react";
import axios from "axios";

const useFetch = ( dataUrl ) => {
    // Set initial state variables
    const [ data, setData ] = useState( [] );
    const [ catchError, setCatchError ] = useState( null );
    const [ isLoading, setIsLoading ] = useState( false );

    const controllerRef = useRef( false );

    // Run the effect on mount
    useEffect( () => {
            let isMounted = true;

            // Define request cancellation signal
            const controller = new AbortController();
            const { signal } = controller;

            // Fetch data function declaration
            const fetchData = async ( url ) => {
                setIsLoading( true );
                try {
                    // Fetch the response
                    // setTimeout( async () => {
                            const response = await axios.get( url, {
                                signal
                            } )
                                .catch( e => axios.isCancel( e ) )
                            // Catch cancellation error (couldn't be fetched in the catch block)
                            // .catch( e => e.code === "ERR_CANCELED" && console.log( "Fetch Request Cancelled" ) );
                            // Set the data
                            if ( isMounted ) {
                                setData( response.data );
                                setCatchError( null );
                            }
                        // }, 2000
                    // )
                } catch
                    ( err ) {
                    // Catch the error
                    console.log( err )

                    if ( isMounted ) {
                        // setCatchError( err.message );
                        setData( [] );
                    }
                } finally {
                    // Set loading to initial state
                    isMounted && setTimeout( () => setIsLoading( false ), 2000 );
                }
            }
            // Call the Fetch Data function
            fetchData( dataUrl )

            // Cleanup the request on cancellation
            return function cleanUp() {
                isMounted = false;
                controller.abort();
            };
        }, [ dataUrl ]
    )
    ;

    return { data, catchError, isLoading };
}

export default useFetch;