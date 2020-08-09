import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import userReducer from './userReducer';
import { Provider } from 'react-redux';
import { getFromLocalStorage, saveToLocalStorage } from './localStorage';

const persistStore = getFromLocalStorage();
const store = createStore(userReducer, persistStore);

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));