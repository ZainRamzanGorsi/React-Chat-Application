const Initial_State = {
    user: [
        {
            username: "Zain Ramzan",
        }
    ]
}

export default (state = Initial_State) => {
    switch (action.type) {
        case "GetUsername":
            return ({
                state,
                user: [...state.user, action.payload]
            })
    }


    return state;

}