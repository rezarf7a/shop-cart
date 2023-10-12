import React, { useEffect } from 'react';
import styles from './Store.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/product/productActions';


// gif
import spiner from '../gif/spiner.gif'

import Product from './shared/Product';


const Store = () => {

    const dispatch = useDispatch();
    const productsData = useSelector(state => state.productsState);

    useEffect( () => {
        if(!productsData.products.length) dispatch(fetchProduct())
    }, [] )

    return (
        <div className={styles.container}>
            {
                productsData.loading ?
                    <img src={spiner} style={{width: '20%', textAlign: 'center', margin: 'auto'}} /> :
                productsData.error ?
                    <p>{productsData.error}</p>:
                productsData.products.map(item => <Product key={item.id} productData={item} />)
            }
        </div>
    );
};

export default Store;