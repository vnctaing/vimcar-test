const ItemPrice = (props) => {
  const { item } = props;
  return (
    <div>
      {item.displayedPrice 
        ? <p>
            <span className="item__displayedPrice">{item.displayedPrice}€</span>
            <span className="item__newPrice"> {item.originalPrice}€</span>
          </p>
        : <p className="item__price"> {item.originalPrice}€ </p>
      }
    </div>
  );
}

export default ItemPrice;