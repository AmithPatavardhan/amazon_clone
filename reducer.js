export const initialState={
basket:[],
};

const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET' :
            //logic to add
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        // break;

        case 'REMOVE_FROM_BASKET' :
            //logic to remove

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id,
              );
              let newBasket = [...state.basket];
        console.log(index)
              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
        
              return {
                ...state,
                basket: newBasket
              }
        // break;
        default :
        return {
            ...state
        };
    }
}

export default reducer;