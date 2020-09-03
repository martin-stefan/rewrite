import React from 'react';
import Loading from './components/Loading/Loading';
import Welcome from './containers/Welcome/Welcome';
import Footer from './containers/Footer/Footer';

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
