const Item = (props) => {
    return (
        <div className="item">
            <img className="item-image" src={props.item.image} alt="" />
            <p className="item-title">{props.item.title.substring(0, 36)}</p>
            <span>
                <p className="price">${props.item.price}</p>
                <button onClick={() => props.onclick(props.item.price)}>
                    Add to Cart
                </button>
            </span>
        </div>
    );
};

export default Item;
