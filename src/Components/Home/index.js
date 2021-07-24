import React from 'react';
import { connect } from 'react-redux';
import set_data from '../../store/action';
import './style.css'

class App extends React.Component {
    getUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>React Chat Application</h1>
                <input type='text' placeholder='Enter Your Name' required onChange={(e) => this.getUserName(e)} /><br /><br />
                <button onClick={()=>this.getUserName()}>Start the Chat</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    set_data: () => dispatch(set_data()),
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
