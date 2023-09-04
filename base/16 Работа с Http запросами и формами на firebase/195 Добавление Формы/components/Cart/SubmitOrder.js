import styles from './SubmitOrder.module.css';

const SubmitOrder = (props) => {

	const confirmOrderHandler = (event) => {
		event.preventDefault();
	}

	return (
		<form onSubmit={confirmOrderHandler}>
			<div className={styles.control}>
				<label htmlFor="name">name</label>
				<input type="text" id="name"/>
			</div>
			<div className={styles.control}>
				<label htmlFor="city">city</label>
				<input type="text" id="city"/>
			</div>
			<div className={styles.control}>
				<label htmlFor="address">address</label>
				<input type="text" id="address"/>
			</div>
		 	<button>confirm</button>
		 	<button type="button" onClick={props.onCancel}>cancel</button>
		</form>
	);
}

export default SubmitOrder;