import React from 'react';
import './App.scss';
import Loading from './components/Loading/Loading';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Welcome />

      {/* <Loading /> */}
    </div>
  );
}

export default App;
