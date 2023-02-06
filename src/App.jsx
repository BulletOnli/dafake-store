import React, { useContext } from "react";

import "./index.css";
import Nav from "./components/Navbar";
import Items from "./components/Items";
import Categories from "./components/Categories";
import OrderDetails from "./components/OrderDetails";

import { Context } from "./Context";

function App() {
    const { isCartShown } = useContext(Context);

    return (
        <>
            <Nav />
            {isCartShown && <OrderDetails />}

            <main>
                <Categories />
                <Items />
            </main>
        </>
    );
}

export default App;
