import Item from './Item';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/action.js'
import { connect } from 'react-redux';


const ShoppingPage = (props) => {
  return (
    <div>
      hello
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
