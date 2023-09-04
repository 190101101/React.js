import './CostItem.css';

const CostItem = () => {
    return (
        <div className="cost-item">
            <div>Iyun 2023 17</div>
            <div className="cost-item__description">
                <h2>Холодельник</h2>
                <div className="cost-item__price">$999.99</div>
            </div>
        </div>
    );
}

export default CostItem;