import Item from "./Item";
import React, { useContext } from "react";
import { Context } from "../Context";

const Items = () => {
    const { tempData, setOrderDetails } = useContext(Context);

    return (
        <div className="item-Container">
            {tempData.map((item) => (
                <Item
                    item={item}
                    key={item.id}
                    onclick={() => setOrderDetails(item.price)}
                />
            ))}
        </div>
    );
};

export default Items;
