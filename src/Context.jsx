import React, { useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
    const [itemData, setItemData] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [categories, setCategories] = useState([]);
    const [isCartShown, setIsCartShown] = useState(false);

    // tempData is the array of filtered items to show in every categories
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
        setItemCount((prevCount) => prevCount + 1);
        setTotalAmount((prevTotal) => prevTotal + addedAmount);
    }

    return (
        <Context.Provider
            value={{
                setItemData,
                itemCount,
                setItemCount,
                totalAmount,
                setTotalAmount,
                categories,
                isCartShown,
                setIsCartShown,
                tempData,
                filterItem,
                setOrderDetails,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };
