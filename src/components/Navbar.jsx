import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Nav = () => {
    const { itemCount, setIsCartShown } = useContext(Context);

    return (
        <nav>
            <h1>DaFake Store</h1>
            <div className="cart-section">
                <i
                    className="fa-solid fa-cart-shopping"
                    onClick={() => setIsCartShown(true)}
                ></i>
                <p className="order-count">{itemCount}</p>
            </div>
        </nav>
    );
};

export default Nav;
