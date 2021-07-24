const get_username = () => {
    return (dispatch) => {
            dispatch({
                type:"Get_Username",users:{username: "gorsi"}
            })
        }
}

export default get_username