const Item = (props) => {
  const { item } = props;
  return (
    <div>
      <div>{item.id}</div>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Item;