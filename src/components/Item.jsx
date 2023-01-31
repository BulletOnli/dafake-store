const Item = (props) => {
    return (
        <div className="item">
            <div className="image-container">
                <img src={props.item.image} alt="" />
            </div>
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
