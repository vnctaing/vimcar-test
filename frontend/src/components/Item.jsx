const Item = (props) => {
  const { item } = props;
  return (
    <div className="item">
      <img src={'../../assets/' + item.imgPath} alt=""/>
      <div>{item.id}</div>
      <p>{item.name}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Item;