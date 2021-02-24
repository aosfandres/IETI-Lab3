import React, { Component } from 'react';
import './App.css';

export default class App2 extends Component {

    constructor(props) {
        super(props);
        //localStorage.setItem('hola','si entre');
        //this.state = { isLoggedIn: false };
    }
    
    render() {
        return (
                <div >
                 <h1>aca deberia estar eso + {localStorage.getItem('isLoggedIn')}</h1>
                </div>
        );
    }



}

