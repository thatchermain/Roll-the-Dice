import React, { Component } from 'react';
import Dice from './Dice';
import './Roller.css';

class Roller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            face1: 'one',
            face2: 'one',
            isRolling: false,
            score: 2

        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        let faces = ['one', 'two', 'three', 'four', 'five', 'six'];
        let newFace1 = faces[Math.floor(Math.random() * faces.length)];
        let newFace1Score = faces.indexOf(newFace1) + 1;
        let newFace2 = faces[Math.floor(Math.random() * faces.length)];
        let newFace2Score = faces.indexOf(newFace2) + 1;

        this.setState({
            face1: newFace1,
            face2: newFace2,
            isRolling: true,
            score: newFace1Score + newFace2Score

        })
        setTimeout(() => {
            this.setState({ isRolling: false })
        }, 1000);
    };
    render() {
        return (
            <div className="Roller">

                <h1>{`Score: ${this.state.score}`}</h1>
                <div className="wrapper">

                    <Dice
                        face={this.state.face1}
                        animate={this.state.isRolling}
                    />
                    <Dice
                        face={this.state.face2}
                        animate={this.state.isRolling}
                    />

                </div>
                <button
                    className={`btn ${this.state.isRolling ? 'busy' : 'free'}`}
                    disabled={this.state.isRolling}
                    onClick={this.roll}>{this.state.isRolling ? 'Rolling...' : 'Roll !'}
                </button>
            </div>
        );
    }
}

export default Roller;