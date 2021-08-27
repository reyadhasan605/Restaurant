import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent.js'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </div>
    </Provider>

  );
}

export default App;
