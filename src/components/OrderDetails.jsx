import React, { useState, useContext } from "react";
import { Context } from "../Context";

const OrderDetails = () => {
    const {
        itemCount,
        totalAmount,
        setItemCount,
        setTotalAmount,
        setIsCartShown,
    } = useContext(Context);

    return (
        <div className="order-details">
            <i
                className="fa-solid fa-xmark"
                onClick={() => setIsCartShown(false)}
            ></i>
            <h1>Order Details</h1>
            <p className="total-items">Total Items: {itemCount}</p>
            <p className="total-cost">Total Cost: ${totalAmount}</p>
            <span>
                <button>Place Order</button>
                <button
                    onClick={() => {
                        setItemCount(0);
                        setTotalAmount(0);
                    }}
                >
                    Remove All
                </button>
            </span>
        </div>
    );
};

export default OrderDetails;
