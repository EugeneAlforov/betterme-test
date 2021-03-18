import React from 'react';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Test from './components/test';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          
        </header>
        <Test />
      </div>
    </Provider>
  );
}

export default App;

