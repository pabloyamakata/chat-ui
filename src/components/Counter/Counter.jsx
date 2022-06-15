import { useSelector, useDispatch } from 'react-redux';

import {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount
} from '../../redux/features/counter/counterSlice';

function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment 10</button>
            <button onClick={() => dispatch(decrementByAmount(10))}>Decrement 10</button>
            <span>{count}</span>
        </div>
    )
}

export default Counter;