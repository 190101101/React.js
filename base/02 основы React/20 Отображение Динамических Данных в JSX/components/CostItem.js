import './CostItem.css';

const CostItem = () => {

    const costDate = new Date(2023, 6, 17)
    const costDescription = 'Холодельник';
    const costAmount = '999.99';

    return (
        <div className="cost-item">
            <div>{costDate.toISOString()}</div>
            <div className="cost-item__description">
                <h2>{costDescription}</h2>
                <div className="cost-item__price">${costAmount}</div>
            </div>
        </div>
    );
}

export default CostItem;