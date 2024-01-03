import { COUNTER_DECREMENT, COUNTER_INCREMENT } from "../Actiontype";


const initialValues = {
    count : 0
}

export const counterReducer = (state = initialValues, action ) => {
    console.log(action);

    switch(action.type) {
            case COUNTER_INCREMENT:
                return {
                    ...state,
                    count : state.count +1 
                }


            case COUNTER_DECREMENT:
                return {
                    ...state,
                    count : state.count -1
                }

            default:
                return state
    }


}