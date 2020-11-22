
const initialstate = {
    shopAdded: 0
}

function rootReducer(state = initialstate, action){
    switch (action.type) {
        case "ADD_TO_FAVE":
            return{
                shopAdded: state.shopAdded + 1
            }
            
        case "REMOVE_FROM_FAVE":
            if (state.shopAdded !== 0) {
                return{
                    shopAdded: state.shopAdded - 1 
                }  
            } 
            else {
                return state;
            }
    
        default:
            return state;
    }
}

/*Actions
export const onclickAction = ()=>({
    type: "ADD_TO_FAVE"
});

export const handleRonclickAction = ()=> ({
    type: "REMOVE_FROM_FAVE"
});*/

export default rootReducer;