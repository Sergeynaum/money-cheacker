import { createStore } from 'redux'

const moneyListState = []
function moneyList(state = moneyListState, action) {
    if(action.type === 'ADD_INCOME') {
        return [
            ...state,
            action.transaction
        ]
    }
    return state
} 

const store = createStore(moneyList)

store.subscribe(() => {
    console.log('subscribe', store.getState());
    
})


store.dispatch({type: 'ADD_INCOME', transaction: 'first'})