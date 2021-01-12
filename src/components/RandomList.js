import React from 'react';

export class RandomList extends React.Component {

    render() {
        return (
            <div>
                <ol>
                    {this.randomNumbers().map(number => (<li>{number}</li>))}
                </ol>
            </div>
        );
    }

    randomNumbers() {
        var tab=[];
        for(var i = 0; i < 10; i++) {
            tab.push(Math.round(Math.random()*100));
        }
        return tab;
    }
}
