const Initial_State = {
    user: [
        {
            name: "Zain Ramzan",
            email: "zainramzan7133@gmail.com"
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