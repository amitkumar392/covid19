import React, { Component } from 'react';
import {Chart, Cards, CountryPicker} from './Components/component';
import styles from './App.module.css';

import {fetchData} from './Api/index';



export default class App extends Component {
    state={
        data:{}
    }

    async componentDidMount() {
        const fetchData=await fetchData();
        this.setState({data:fetchData})
    }
    
    render() {
        return (
            <div className={styles.container}>
                <h1>App</h1>
                <Cards data={this.state.data}/>
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}
