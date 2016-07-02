import ItemPrice from './ItemPrice.jsx';

const CartItem = (props) => {
  const { item } = props;
  return (
    <div className="cart__item">
      <img className="cart__itemImg" src={'../../assets/' + item.imgPath} alt=""/>
      <div className="cart__textOffset">
        {item.name}
        <ItemPrice item={props.item} />
      </div>
    </div>
  );
}

export default CartItem;