import React, { useEffect, useState, createContext } from 'react';

import { getProducts } from '../services/Api';

export const contextProvider = createContext();

const ProductsContextProvider = ({children}) => {

    const [ products, setProducts ] = useState( [] );

    useEffect(()=>{
        const fetchApi = async ()=>{
            setProducts(await getProducts())
        }

        fetchApi();
    }, [])

    return (
        <div>
            <contextProvider.Provider value={products}>
                {children}
            </contextProvider.Provider>
        </div>
    );
};

export default ProductsContextProvider;