

const get_username = () => {
    return (dispatch) => {
        dispatch({
            type: "Get_Username", users: { username: '' }
        })
    }
}
const handleChange = (e) => {
    return (dispatch) => {
        dispatch({
            type: "Get_Username", username: e.target.value
        })
    }
}


export default { get_username, handleChange }