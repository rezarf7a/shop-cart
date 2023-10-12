import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import { useDispatch, useSelector } from 'react-redux';

// actions
import { addItem, removeItem, increase, decrease } from "../../redux/cart/cartAction"

//icons
import trashIcon from '../../assets/icons/trash.svg'

//functions
import { shorten, isInCart, quantityCount } from '../../helpers/functions';

//context

const Product = ({productData}) => {

const dispatch = useDispatch();
const state = useSelector(state => state.cartState)


    return (
        <div className={styles.container}>
            <img src={productData.image} style={{width:'200px'}} className={styles.cardImage} />
            <h3>{shorten(productData.title)}</h3>
            <p>{`${productData.price} $`}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`}>more</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) > 1 && <button onClick={()=> dispatch(decrease(productData))} className={styles.smallButton}>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button onClick={()=> dispatch(removeItem(productData))} className={styles.smallButton}><img src={trashIcon} alt='remove' /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className={styles.counter}>{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                            <button onClick={() => dispatch(increase(productData))} className={styles.smallButton}>+</button> :
                            <button onClick={() => dispatch(addItem(productData))}>add to cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;