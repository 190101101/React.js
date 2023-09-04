import React from 'react';
import styles from './Header.module.css';
import img from '../../assets/sushi.jpg';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>япона кухня</h1>
                <HeaderCardButton text={"корзина"}/>
            </header>
            <div className={styles["main-image"]}>
                <img src={img} alt="япона кухня"/>
            </div>
        </React.Fragment>
    );
}

export default Header;