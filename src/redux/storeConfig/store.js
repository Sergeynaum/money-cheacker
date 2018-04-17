import { createStore } from 'redux'
import { AppReducer } from '../reducers/'
import { loadState, saveState } from '../../config/localStorage'
import uuidv4 from 'uuid/v4'


const store = createStore(AppReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const statusLocal = loadState()

if (!statusLocal) {
    let categoriesOutcome = ['Hygiene', 'Foods', 'Housing', 'Health', 'Cafe', 'Car', 'Clothes', 'Pets', 'Gifts', 'Entertainment', 'Communication', 'Sport', 'Bills', 'Taxi', 'Transport']
    categoriesOutcome.map((catItem) => {
        let item = {
            key: uuidv4(), 
            typeName: 'Outcomes', 
            typeKey:'Outcome',
            name: catItem
        }
        store.dispatch({type: 'ADD_CATEGORY', categories: item})
    })

    let categoriesIncome = ['Salary', 'Saving', 'Deposit']
    categoriesIncome.map((catItem) => {
        let item = {
            key: uuidv4(), 
            typeName: 'Incomes', 
            typeKey:'income',
            name: catItem
        }
        store.dispatch({type: 'ADD_CATEGORY', categories: item})
    })
    let storeData = store.getState()
    saveState({categories: storeData.categories})
    
}

export default store