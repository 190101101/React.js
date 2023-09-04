import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';
import React from 'react';
import ReactDom from 'react-dom';

const Backdrop = (props) => {
    return (
        <React.Fragment>
            <div onClick={props.onClick} className={styles.backdrop}></div>
        </React.Fragment>
    );
}

const Modal = (props) => {
    return (
        <React.Fragment>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onClick}>Ok</Button>
                </footer>
            </Card>
        </React.Fragment>
    );
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(
                <Backdrop onClick={props.onCloseModal}/>,
                document.querySelector('#backdrop')
            )};
            {ReactDom.createPortal(
                <Modal onClick={props.onCloseModal} 
                    title={props.title}
                    message={props.message}
                />,
                document.querySelector('#modal')
            )};
        </React.Fragment>
    );
}

export default ErrorModal;