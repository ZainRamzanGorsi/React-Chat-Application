import React from 'react';
import { connect } from 'react-redux';
import get_username from '../../store/action';
import handleChange from '../../store/action'
import './style.css'

class App extends React.Component {
    handleChange = (e) => {
        this.setState = {
            [e.target.name]: e.target.value
        }
    }
    render() {
        console.log("Props ===> ", this.props);
        return (
            <div>
                <h1>React Chat Application</h1>
                <input name='username' type='text' placeholder='Enter Your Name' onChange={(e) => this.handleChange(e)} /> <br /><br />
                <button onClick={() => this.props.get_username()}>Start the Chatting</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    username: state.user
})

const mapDispatchToProps = (dispatch) => ({
    get_username: () => dispatch(get_username()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
