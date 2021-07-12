import './App.css';
import { connect } from 'react-redux';
import React from 'react';

class App extends React.Component {
  render(){
    console.log("Props Data ====>",this.props);
    return(
      <div>
        <h1>Zain Ramzan Gorsi</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})


export default connect(mapStateToProps, null)(App);
