import styles from './Modal.module.css';
import React from 'react';
import ReactDom from 'react-dom';

const BackDrop = (props) => {
    return (
        <div onClick={props.onHideCart} className={styles.backdrop}></div>
    )
}

const ModalWindow = (props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <BackDrop onHideCart={props.onHideCart}></BackDrop>, portalElement
            )}
            
            {ReactDom.createPortal(
                <ModalWindow>{props.children}</ModalWindow>, portalElement
            )}
        </React.Fragment>
    );
}

export default Modal;