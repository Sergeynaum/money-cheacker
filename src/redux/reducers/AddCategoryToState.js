import AppInitialState from '../../config/AppInitialState'

const initialState = AppInitialState.categories

export default function addCategoryToState(state = initialState, action) {
    if(action.type === 'ADD_CATEGORY') {
        console.log('aaaaction', action);
        return [
            ...state,
            action.categories
        ]
    }
    return state
}
