import ItemPrice from './ItemPrice.jsx';

const CartItem = (props) => {
  const { item } = props;
  return (
    <div>
      {item.name}
      <ItemPrice item={props.item} />
    </div>
  );
}

export default CartItem;