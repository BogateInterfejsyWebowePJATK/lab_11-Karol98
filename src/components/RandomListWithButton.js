import React from 'react';

export class RandomListWithButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { random: [0] };
    }

    handleClick() {
        var tab = [];
        for(var i = 0; i < 10; i++) {
            tab.push(Math.round(Math.random()*100));
        }
        this.setState({ random: this.state.random = tab });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Click</button>
                <ul>
                    {this.state.random.map(number => (<li>{number}</li>))}
                </ul>
            </div>
        );
    }
}

