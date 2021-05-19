import React, { Component } from "react";
import { connect } from "react-redux";

const GreetingsComponent = props => {
  return <h3>Current User: {props.who}</h3>;
};

const mapStateToProps = state => ({
  ...state.globals,
  ...state.auth,
});

// Container 1

const GreetingsContainer = connect(mapStateToProps)(GreetingsComponent);

const NamasteComponent = props => {
  return (
    <h3>
      Namaste: {props.who}, Am i logged in ? : {props.loggedIn.toString()}
    </h3>
  );
};

// Conatiner 2

const NamasteContainer = connect(mapStateToProps)(NamasteComponent);

const App = () => (
  <>
    <GreetingsContainer />
    <NamasteContainer />
  </>
);

export default App;
