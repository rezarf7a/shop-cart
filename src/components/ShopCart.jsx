import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from './ShopCart.module.css';

//context
import {CartContext} from '../context/CartContextProvider.jsx'

//component
import Cart from './shared/Cart'

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext)

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            {state.itemsCounter > 0 && <div className={styles.payments}>
                <p><span>total items:</span> {state.itemsCounter}</p>
                <p><span>total payment:</span> {state.total}</p>
                <div className={styles.buttonContainer}>
                    <button onClick={()=> dispatch({ type: 'CHECKOUT' })} className={styles.checkout}>check out</button>
                    <button onClick={()=> dispatch({ type: 'CLEAR' })} className={styles.clear}>clear</button>
                </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>checked out successfully</h3>
                    <Link to='/products'>buy more!</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>want to buy?</h3>
                    <Link to= '/products'>back to shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;