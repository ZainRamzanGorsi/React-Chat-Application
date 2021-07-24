const Initial_State = {
    user: [
        {
            username: "Zain Ramzan",
        }
    ]
}

export default (state = Initial_State,action) => {
    switch(action.type){
        case"SetData":
        return({
            user: [...state.user,action.payload]
        })
    }




    return state;

}