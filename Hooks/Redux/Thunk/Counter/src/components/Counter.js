import { connect } from 'react-redux';
import CounterControl from './CounterControl';
import StoredResults from './StoredResults';
import * as actionCreators from '../store/actions';

const Counter = (props) => {
  return (
    <div>
      <h3>Current Counter: {props.ctr}</h3>

      <hr />

      <CounterControl label='Increment' clicked={props.onIncrementCounter} />
      <CounterControl label='Decrement' clicked={props.onDecrementCounter} />
      <CounterControl label='Add 10' clicked={props.onAddCounter} />
      <CounterControl label='Subtract 15' clicked={props.onSubtractCounter} />

      <hr />

      {/* here we provide as argument ctr, because in the indiviudal reducers we dont have access to the global state so we provide the state as property */}
      <button onClick={() => props.onStoreResult(props.ctr)}>
        Store Result
      </button>

      <StoredResults
        results={props.storedResults}
        deleteResult={props.onDeleteResult}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // for the dispatch the argument is object which we create in a function for easier usage
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(10)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
