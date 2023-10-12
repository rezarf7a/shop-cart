import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useSelector } from 'react-redux';

//icons
import shop from '../../assets/icons/shop.svg';


const Navbar = () => {

    const state = useSelector(state => state.cartState)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to='/products' className={styles.productLink} >products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/cart'><img src={shop} alt='cart' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;