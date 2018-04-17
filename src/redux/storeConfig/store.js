import { createStore } from 'redux'
import AppReducer from '../reducers/'
import AppInitialState from '../../config/AppInitialState'


const moneyListState = AppInitialState.transactions
 

function moneyList(state = moneyListState, action) {
    if(action.type === 'ADD_INCOME') {
        console.log('aaaaction', action);
        
        return {
            ...state,
            ...action.transactions
        }
    }
    return state
} 

const store = createStore(moneyList, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.dispatch({type: 'ADD_INCOME', transactions: 'first'})

export default store