const set_data = () => {
    return (dispatch) => {
        dispatch(
            {
                type: "SetData",
                payload: {
                    name: "Hamza Ramzan",
                    email: "hamzaramzan@gmail.com"
                }
            }
        )
        }
}

export default set_data