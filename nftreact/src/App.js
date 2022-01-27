import React from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TokenHistory } from './components/TokenHistory';
// import { TraxHistory } from './components/TraxHistory';
import { AddTrax } from './components/AddTrax';
import { ContextProvider } from './context/contextAPI';


function App() {

  return (
    <ContextProvider>
      <div className="container">
        <Header />
        <TokenHistory />
        <Balance />
        {/* <TraxHistory /> */}
        <AddTrax />

      </div>
    </ContextProvider>
  );
}

export default App;
