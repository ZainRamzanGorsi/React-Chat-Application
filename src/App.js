import './App.css';
import { connect } from 'react-redux';
import React from 'react';
import set_data from './store/action';

class App extends React.Component {
  render() {
    console.log("Props ===>",this.props);
    return (
      <div>
        <h1>React-Redux Chat Application</h1>
        <button onClick={()=>this.props.set_data()}>Set Data to Redux</button>
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
