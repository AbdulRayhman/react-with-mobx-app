import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import birdStore from '../store/birdStore';
import '../App.css';
@observer
export default class Birds extends Component {
    handleSubmit = e => {
        e.preventDefault();
        birdStore.addBird(this.birdInput.value);
        e.target.reset();
    };

    render() {
        return (
            <div>
                <h2>You have {birdStore.birdCount} birds</h2>

                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        ref={input => (this.birdInput = input)}
                        placeholder="Add a bird"
                    />
                </form>

                <ul>{birdStore.birds.map(bird => <li key={bird.id}>{bird.value}</li>)}</ul>
            </div>
        );
    }
}