const Initial_State = {
    user: [
        {
            username: "Zain Ramzan",
        }
    ]
}

export default (state = Initial_State,action) => {
    switch (action.type) {
        case "Get_Username":
            return ({
                ...state,
                user: [...state.user, action.users]
            })
    }


    return state;

}