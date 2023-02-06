import React, { useContext } from "react";
import { Context } from "../Context";

const Categories = () => {
    const { categories, filterItem } = useContext(Context);

    return (
        <div className="categery-container">
            {categories.map((category, index) => (
                <p key={index} onClick={() => filterItem(category)}>
                    {category.toUpperCase()}
                </p>
            ))}
        </div>
    );
};

export default Categories;
