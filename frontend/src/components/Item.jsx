import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action.js'

const Item = (props) => {
  const { item } = props;
  
  function handleClick() {
    props.actions.addItemToCart(item);
  }

  return (
    <div className="item">
      <div className="item__imgContainer" onClick={handleClick}>
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

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}
export default connect(null, mapDispatchToProps)(Item);