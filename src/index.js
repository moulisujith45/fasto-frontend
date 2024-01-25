import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// import reportWebVitals from './reportWebVitals';
import {startGetCategory} from "./actions/categoryAction"

const store = configureStore()

console.log(store.getState())
if(localStorage.getItem('token')){
    store.dispatch(startGetCategory())
}

store.subscribe(() => {
    console.log(store.getState(), "updated State")
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
         <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
