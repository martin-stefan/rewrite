import React from 'react';
import './App.scss';
import Loading from './components/Loading/Loading';
import Welcome from './components/Welcome/Welcome';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Welcome />

      {/* <Loading /> */}

      <Footer />
    </div>
  );
}

export default App;
