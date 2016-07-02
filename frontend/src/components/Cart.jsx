import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartItem from './CartItem.jsx';
import * as actions from '../actions/action.js'


const Cart = (props) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {props.cart.map((i) => <CartItem key={i.id} item={i} />)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);