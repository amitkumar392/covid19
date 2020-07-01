import React, { Component } from 'react';
import {Chart, Cards, CountryPicker} from './Components/component';
import styles from './App.module.css';

import {fetchData} from './Api/index';



export default class App extends Component {
    async componentDidMount() {
        const data=await fetchData();
        console.log(data);
    }
    
    render() {
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Chart />
                <Cards />
                <CountryPicker />
            </div>
        )
    }
}
