const set_data = () => {
    return (dispatch) => {
        dispatch(
            {
                type: "SetData",
                payload: {
                    username: e.target.value
                }
            }
        )
        }
}

export default set_data