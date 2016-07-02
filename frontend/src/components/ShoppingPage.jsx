import Item from './Item';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action.js'
import { connect } from 'react-redux';


const ShoppingPage = (props) => {
  const { rootReducer } = props;
  const { items } = rootReducer;
  return (
    <div>
      {items.map((i) => <Item key={i.id} item={i}/>)}
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
