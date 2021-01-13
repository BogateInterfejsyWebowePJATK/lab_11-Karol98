import React from 'react';
import './Photo.scss';

export default function Stars() {
    return (
        <div>
            <head>
                <script src="https://kit.fontawesome.com/879af1e045.js" crossOrigin="anonymous"/>
            </head>
            <div className="star-widget">
                <input type="radio" name="rate" id="rate-5"/>
                <label htmlFor="rate-5" className="fas fa-star"/>
                <input type="radio" name="rate" id="rate-4"/>
                <label htmlFor="rate-4" className="fas fa-star"/>
                <input type="radio" name="rate" id="rate-3"/>
                <label htmlFor="rate-3" className="fas fa-star"/>
                <input type="radio" name="rate" id="rate-2"/>
                <label htmlFor="rate-2" className="fas fa-star"/>
                <input type="radio" name="rate" id="rate-1"/>
                <label htmlFor="rate-1" className="fas fa-star"/>
            </div>
        </div>
    );
}