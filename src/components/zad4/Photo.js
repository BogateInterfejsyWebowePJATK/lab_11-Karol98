import React from 'react';
import data from '../Data/data.json'
import './Photo.scss';
import like from '../png/like.png'
import unlike from '../png/unlike.png'
import Stars from './Stars'

export class Photo extends React.Component {

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.shuffleData = this.shuffleData.bind(this);
        this.sortData = this.sortData.bind(this);
        this.like = this.like.bind(this);
        this.unlike = this.unlike.bind(this);
        this.state = {
            data: data
        }
    }

    remove(index) {
        var data = this.state.data;
        data.splice(index, 1);
        this.setState(this.state.random = data);
    }

    sortData(string) {
        var x = string;
        this.setState(this.state.data = data.sort(this.GetSortOrder(x)));
    }

    shuffleData() {
        var array = this.state.data;
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        this.setState(this.state.data = array);
    }

    GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            } else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        }
    }
    like(index) {
        var pom = this.state.data;
        pom[index].like += 1;
        this.setState(this.state.data = pom);
    }
    unlike(index) {
        var pom = this.state.data;
        pom[index].unlike += 1;
        this.setState(this.state.data = pom);
    }

    render() {
        return (
            <div id = "contener">

                {this.state.data.map((data, index) => {
                    return <section>
                        <header>
                            <h4>{data.title}</h4>
                            <img src={data.url} alt="Logo"/><br/>
                            <button id="delete" onClick={this.remove.bind(this, index)}>DELETE</button> <br/>{data.like}
                            <input type="image" src={like} alt="xd" onClick={this.like.bind(this, index)}/>
                            <input type="image" src={unlike} alt="xd" onClick={this.unlike.bind(this, index)}/>{data.unlike}<br/>
                            <Stars/>
                            <p>{data.date}</p>
                        </header>

                    </section>
                })}
                <div id="buttons">
                    <button class="foot" onClick={this.sortData.bind(this, "title")}>Sort by title</button>
                    <button class="foot" onClick={this.sortData.bind(this, "date")}>Sort by date</button>
                    <button class="foot" onClick={this.shuffleData.bind(this)}>shuffle</button>
                </div>
            </div>
        )
    }

}