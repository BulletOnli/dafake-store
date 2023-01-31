const Categories = (props) => {
    return (
        <div className="categery-container">
            {props.categories.map((category, index) => (
                <p key={index} onClick={() => props.filterItem(category)}>
                    {category.toUpperCase()}
                </p>
            ))}
        </div>
    );
};

export default Categories;
