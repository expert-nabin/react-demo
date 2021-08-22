import { useReducer } from 'react';


const initialState = { count: 0};

function reducer(state, actionType) {
    let newState;
    switch(actionType.type) {
        case 'increment':
            newState = { count: state.count + 1 };
            break;
        case 'decrement':
            newState = { count: state.count - 1 };
            break;
        default:
          throw Error('Invalid action type')
    }
    return newState;
}

function Counter() {
    const [countState, setCountState] = useReducer(reducer, { count: 100});


    return (
        <>
            Current count is <strong>{countState.count}</strong>
            <button onClick={() => setCountState({type: 'increment'})}>+</button><button onClick={() => setCountState({type: 'decrement'})} >-</button>
        </>
    );
}
export default Counter;