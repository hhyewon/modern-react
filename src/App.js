import './App.css';
import React from 'react';
import InputSample from "./component/InputSample";
import UserList from "./component/UserList";

function App() {
  return (
      <div>
        <InputSample/>
        <div className="line"></div>
        <UserList/>
      </div>
  );
}



export default App;
