
const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false
}

const sumItems = item => {
    const itemsCounter = item.reduce((total, product) => total + product.quantity, 0);
    const total = item.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemsCounter, total }
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            if(!state.selectedItems.find(item => item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false,
            }
        
            case 'REMOVE_ITEM':
                const newSelectedItem = state.selectedItems.filter(item => item.id !== action.payload.id)
                return {
                    ...state,
                    selectedItems : [...newSelectedItem],
                    ...sumItems(newSelectedItem),
                }
            case 'INCREASE':
                const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexI].quantity++;
                return{
                    ...state,
                    ...sumItems(state.selectedItems),
                }
            case 'DECREASE':
                const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
                state.selectedItems[indexD].quantity--;
                return{
                    ...state,
                    ...sumItems(state.selectedItems),
                }
            case 'CHECKOUT':
                return{
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkout: true
                }
            case 'CLEAR':
                return{
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkout: false
                }
            default:
            return state;
    }
}

export default cartReducer;