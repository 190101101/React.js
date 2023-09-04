import {useRef, useState} from 'react';
import styles from './SubmitOrder.module.css';

const isInputValid = (inputValue) => inputValue.trim() !== "";

const SubmitOrder = (props) => {

	const [formValidity, setFormValidity] = useState({
		name: true,
		city: true,
		address: true,
	});

	const nameInputRef = useRef();
	const cityInputRef = useRef();
	const addressInputRef = useRef();

	const confirmOrderHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;

		const isEnteredNameValid = isInputValid(enteredName);
		const isEnteredCityValid = isInputValid(enteredCity);
		const isEnteredAddressValid = isInputValid(enteredAddress);

		setFormValidity({
			name: isEnteredNameValid,
			city: isEnteredCityValid,
			address: isEnteredAddressValid,
		});

		const isFormValid = isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

		if(!isFormValid){
			return;
		}
	}

	return (
		<form onSubmit={confirmOrderHandler} className={styles.form}>
			<div className={`${styles.control} ${formValidity.name ? "" : styles.invalid}`}>
				<label htmlFor="name">name</label>
				<input ref={nameInputRef} type="text" id="name"/>
				{!formValidity.name && <p>введите имя</p>}
			</div>
			<div className={`${styles.control} ${formValidity.city ? "" : styles.invalid}`}>
				<label htmlFor="city">city</label>
				<input ref={cityInputRef} type="text" id="city"/>
				{!formValidity.city && <p>введите город</p>}
			</div>
			<div className={`${styles.control} ${formValidity.address ? "" : styles.invalid}`}>
				<label htmlFor="address">address</label>
				<input ref={addressInputRef} type="text" id="address"/>
				{!formValidity.address && <p>введите адрес</p>}
			</div>
			<div className={styles.actions}>
			 	<button class={styles.submit}>confirm</button>
			 	<button type="button" onClick={props.onCancel}>cancel</button>
			</div>
		</form>
	);
}

export default SubmitOrder;