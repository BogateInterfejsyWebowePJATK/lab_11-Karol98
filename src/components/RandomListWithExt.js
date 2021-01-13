import React from 'react';
import TableWithNumber from "./TableWithNumbers";
export class RandomListWithExt extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.remove = this.remove.bind(this);
        this.toString = this.toString.bind(this);
        this.showing = this.showing.bind(this);
        this.state = {
            random: [0],
            index: -1,
            showing: true,
            liczba: 8
        };
    }

    handleClick() {
        var tab = [];
        for(var i = 0; i < 10; i++) {
            tab.push(Math.round(Math.random()*100));
        }
        this.setState({ random: this.state.random = tab });
    }

    remove(index)    {
        var tab = this.state.random;
        tab.splice(index, 1);
        this.setState({ random: this.state.random = tab });
    }

    toString(index, i) {
        var tab = this.state.random;
        tab[index] = tab[index].toString(i);
        this.setState({ random: this.state.random = tab });
    }

    showing() {
        this.setState({showing: !this.state.showing});
    }

    render() {
        const { showing } = this.state;
        return (
            showing === true ?
            <div style={{ display: (showing ? 'block' : 'none')}}>
                <button onClick={this.handleClick.bind(this)}>Losuj liczby</button>
                    <ul>
                        {this.state.random.map((number, index) =>
                                (<li>{number}
                                <button onClick={this.remove.bind(this,index)}>usuń</button>
                                <button onClick={this.toString.bind(this,index,2)}>Binarny</button>
                                <button onClick={this.toString.bind(this,index,8)}>Ósemkowy</button>
                                <button onClick={this.toString.bind(this,index,16)}>Szesnastky</button>
                                </li>)
                        )}
                    </ul>
                <button onClick={this.showing.bind(this)}>Tabela</button>
            </div>
                :
                <div>
                    <TableWithNumber random={this.state.random}></TableWithNumber>
                    <button onClick={this.showing.bind(this)}>Tabela</button>
                </div>
        );
    }
}

