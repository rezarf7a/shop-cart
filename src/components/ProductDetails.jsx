import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import { useSelector } from 'react-redux';


const ProductDetails = (props) => {

    const params = useParams();
    const id = params.id;
    const data = useSelector(state => state.productsState.products);
    const product = data[id - 1];
    const { image, title, description, price, category } = product;
    console.log(props)
    return (
        <div className={styles.container}>
           <img src={image} alt="product-picture" className={styles.image} />
           <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>category: </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                    <Link to='/products'>Back to shop</Link>
                </div>
           </div>
        </div>
    );
};

export default ProductDetails;