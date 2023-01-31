import React, { useState, useEffect } from "react";

import "./index.css";
import Nav from "./components/Navbar";
import Items from "./components/Items";
import Categories from "./components/Categories";
import OrderDetails from "./components/OrderDetails";

function App() {
    const [itemData, setItemData] = useState([]);
    const [itemCount, setitemCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [categories, setCategories] = useState([]);
    const [isCartShown, setIsCartShown] = useState(false);

    // Temporary data for filtered Items
    const [tempData, setTempData] = useState([]);

    const storeData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        setItemData(data);
        setTempData(data);
        setCategories(["All", ...new Set(data.map((item) => item.category))]);
    };

    useEffect(() => {
        storeData();
    }, []);

    // Filter for Categories
    function filterItem(category) {
        if (category === "All") {
            storeData();
            return;
        }

        const newItems = itemData.filter((item) => item.category === category);
        setTempData(newItems);
    }

    // Compute the total Items and Total Amount
    function setOrderDetails(addedAmount) {
        setitemCount((prevCount) => prevCount + 1);
        setTotalAmount((prevTotal) => prevTotal + addedAmount);
    }

    return (
        <>
            <Nav itemCount={itemCount} openCart={() => setIsCartShown(true)} />

            {isCartShown && (
                <OrderDetails
                    itemCount={itemCount}
                    totalAmount={totalAmount}
                    clearDetails={() => {
                        setitemCount(0);
                        setTotalAmount(0);
                    }}
                    closeCart={() => setIsCartShown(false)}
                />
            )}

            <main>
                <Categories categories={categories} filterItem={filterItem} />
                <Items itemData={tempData} onclick={setOrderDetails} />
            </main>
        </>
    );
}

export default App;
