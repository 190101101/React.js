import {useRef} from 'react';
import styles from './SubmitOrder.module.css';

const SubmitOrder = (props) => {

	const nameInputRef = useRef();
	const cityInputRef = useRef();
	const addressInputRef = useRef();

	const confirmOrderHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;

		console.log(enteredName);
		console.log(enteredCity);
		console.log(enteredAddress);
	}

	return (
		<form onSubmit={confirmOrderHandler} className={styles.form}>
			<div className={styles.control}>
				<label htmlFor="name">name</label>
				<input ref={nameInputRef} type="text" id="name"/>
			</div>
			<div className={styles.control}>
				<label htmlFor="city">city</label>
				<input ref={cityInputRef} type="text" id="city"/>
			</div>
			<div className={styles.control}>
				<label htmlFor="address">address</label>
				<input ref={addressInputRef} type="text" id="address"/>
			</div>
			<div className={styles.actions}>
			 	<button class={styles.submit}>confirm</button>
			 	<button type="button" onClick={props.onCancel}>cancel</button>
			</div>
		</form>
	);
}

export default SubmitOrder;