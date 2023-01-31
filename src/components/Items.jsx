import Item from "./Item";

const Items = (props) => {
    return (
        <div className="item-Container">
            {props.itemData.map((item) => (
                <Item item={item} key={item.id} onclick={props.onclick} />
            ))}
        </div>
    );
};

export default Items;
