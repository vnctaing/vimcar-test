const Item = (props) => {
  return (
    <div>
      <div>{props.id}</div>
      <p>{props.name}</p>
      <p>{props.price}</p>
    </div>
  );
};

export default Item;