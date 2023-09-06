import React, { useContext } from 'react';
import styles from './Store.module.css';

import { contextProvider } from '../context/ProductsContextProvider';
import Product from './shared/Product';


const Store = () => {

    const products = useContext(contextProvider)

    return (
        <div className={styles.container}>
            {products.map( item => <Product key={item.id} productData={item} /> )}
        </div>
    );
};

export default Store;