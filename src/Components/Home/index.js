import React from 'react';
import { connect } from 'react-redux';
import set_data from '../../store/action';
import './style.css'

class App extends React.Component {
  render() {
    console.log("Props ===>",this.props);
    return (
      <div>
        <h1>React Chat Application</h1>
        {/* <button onClick={()=>this.props.set_data()}>Set Data to Redux</button> */}
        <input type='text' placeholder='Enter Your Name' required/><br/><br/>
        <button>Start the Chat</button>
        
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
