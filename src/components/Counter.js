import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();

  const latestCouter =useSelector(state=> state.counter.counter);

  const show = useSelector(state=> state.counter.showCounter)

  const incrementHandler = ()=> {
    dispatch(counterActions.increment()); 
  }

  const decrementHandler = ()=> {
    dispatch(counterActions.decrement())
  }
  // Attaching payload to actions. value is payload (carrying extra data from the store to component)

  const increaseHandler = ()=> {
    dispatch (counterActions.increase(5)) // {type: some_unique_identifier, payload: 5}
  }
  const toggleCounterHandler = () => {
    dispatch (counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    {show? <div className={classes.value}>{latestCouter}</div>: "Counter Hidden"}
      <div>
        <button onClick={()=> incrementHandler()}>Increment</button>
        <button onClick={()=> increaseHandler()}>Increase by 5</button>
        <button onClick={()=> decrementHandler()}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
