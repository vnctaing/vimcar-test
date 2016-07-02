import ItemPrice from './ItemPrice.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action.js'



const CartItem = (props) => {

  function handleClick() {
    props.actions.removeItemFromCart(props.index);
  }

  const { item } = props;
  return (
    <div className="cart__item">
      <img className="cart__itemImg" src={'../../assets/' + item.imgPath} alt=""/>
      <div className="cart__textOffset">
        {item.name}
        <ItemPrice item={props.item} />
      </div>
      <button type="button" className="cart__removeCta" onClick={handleClick}>Remove from cart</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(CartItem);
