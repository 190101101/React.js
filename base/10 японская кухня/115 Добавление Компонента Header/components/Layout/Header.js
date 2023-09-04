import React from 'react';
import styles from './Header.module.css';
import img from '../../assets/sushi.jpg';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>япона кухня</h1>
                <button>корзина</button>
            </header>
            <div className={styles["main-image"]}>
                <img src={img} alt="япона кухня"/>
            </div>
        </React.Fragment>
    );
}

export default Header;