import { GET_TODOLIST, GET_TODOLIST_FAIL, GET_TODOLIST_SUCCESS } from "../actions/todo"

export const initialState = {
    data: [
        {
            id: 1,
            count: 1,
            text: "Ola",
            date: ""
        }
    ],
    loading: false,
    hasError: false
}

export const todoList = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOLIST:
            return {
                ...state,
                
            }
        case GET_TODOLIST_SUCCESS:
            return [
                ...state, {
                    id:2,
                    count:1,
                    text:action.payload.text
                }
            ]

        case GET_TODOLIST_FAIL:
            return {
                
            }
        default:
            return state
    }
}