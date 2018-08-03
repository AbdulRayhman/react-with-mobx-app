import React, { Component } from 'react';
import {  observer } from 'mobx-react';
import store from '../store/counterStore';
import '../App.css';
@observer
export default class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Counter Component Here</h1>
                <span>{store.isOdd}</span>
                <span>Your Name : {store.name}</span>
                <p className={store.isOdd ? 'Counter-odd' : 'Counter-even'}>{store.counter}</p>
                <div>
                    <button style={{margin :'10px'}} onClick={()=>store.increment()} >+</button>
                    <button style={{margin :'10px'}} onClick={()=>store.decrement()}>-</button>
                </div>
            </div>
        );
    }
}