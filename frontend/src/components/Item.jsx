const Item = (props) => {
  const { item } = props;
  return (
    <div className="item">
      <div className="item__imgContainer">
        <div className="item__ctaContainer">
          <p className="item__cta">Add To cart</p>          
        </div>
        <div className="item__imgOverlay">
        </div>
        {item.isNew 
            ? <div className="item__highlightTag">New</div>
            : ''}
        {item.isOnSale 
            ? <div className="item__highlightTag">Sale</div>
            : ''}
        <img className="item__img" src={'../../assets/' + item.imgPath} alt=""/>
      </div>
      <div className="item__description">
        <p>{item.name}</p>
        {item.displayedPrice 
          ? <p>
              <span className="item__displayedPrice">{item.displayedPrice} </span>
              <span className="item__newPrice">{item.originalPrice}</span>
            </p>
          : <p className="item__price"> {item.originalPrice} </p>
        }
      </div>
    </div>
  );
};

export default Item;