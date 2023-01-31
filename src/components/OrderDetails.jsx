const OrderDetails = (props) => {
    return (
        <div className="order-details">
            <i className="fa-solid fa-xmark" onClick={props.closeCart}></i>
            <h1>Order Details</h1>
            <p className="total-items">Total Items: {props.itemCount}</p>
            <p className="total-cost">Total Cost: ${props.totalAmount}</p>
            <span>
                <button>Place Order</button>
                <button onClick={props.clearDetails}>Remove All</button>
            </span>
        </div>
    );
};

export default OrderDetails;
