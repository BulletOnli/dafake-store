const Nav = (props) => {
    return (
        <nav>
            <h1>DaFake Store</h1>
            <div className="cart-section">
                <i
                    className="fa-solid fa-cart-shopping"
                    onClick={props.openCart}
                ></i>
                <p className="order-count">{props.itemCount}</p>
            </div>
        </nav>
    );
};

export default Nav;
