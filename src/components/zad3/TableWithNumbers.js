
import React from 'react';
import './TableWithNumbers.scss';

export default function TableWithNumbers(props)  {
        return (
            <table>
                <tr>
                    <td>10</td> <td>2</td> <td>8</td> <td>16</td>
                </tr>
               {props.random.map(num =>(
                   <tr>
                    <td>{num}</td>
                    <td>{num.toString(2)}</td>
                    <td>{num.toString(8)}</td>
                    <td>{num.toString(16)}</td>

                   </tr>))}

            </table>
        );
}