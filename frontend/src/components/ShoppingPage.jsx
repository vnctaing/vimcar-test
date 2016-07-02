import Item from './Item';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action.js'
import { connect } from 'react-redux';
import Cart from './Cart.jsx';


const ShoppingPage = (props) => {
  const { rootReducer } = props;
  const { items, cart } = rootReducer;
  return (
    <div className="container">
      <div>
        <img src="../../assets/vimcar-logo.svg" />
        <img src="../../assets/cart.svg" />
      </div>
      <div>
        <ul className="nav">
          <li className="nav__item">Shop</li>
          <li className="nav__item">Journal</li>
          <li className="nav__item">About</li>
          <li className="nav__item">More</li>
        </ul>
      </div>
      <Cart />
      {items.map((i) => <Item key={i.id} item={i} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    rootReducer: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage)
