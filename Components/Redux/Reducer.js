import { combineReducers } from "redux"


const initState = [{
    name : "Shakeel haider",
    email : "shkhaider2015@gmail.com",
    address : "Banaras, Karachi"
}]

const ProfileReducer = (state=initState, action) =>
{
    switch (action.type) {
        case "addProfile":
            // return {
                // ...state,
                // name : action.payload.name,
                // email : action.payload.email,
                // address : action.payload.address
            // }
            return [ action.payload, ...state]
    
        default:
            return state
    }
}

const Reducer = combineReducers({
    ProfileReducer : ProfileReducer
})

export {Reducer}