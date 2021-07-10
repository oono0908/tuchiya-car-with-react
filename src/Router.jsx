import React from 'react';
import {Switch,Route} from 'react-router-dom';
import { Home, TuchiyaHistory, Movie,Event,Tuchista} from "./templates";



const Move = () => {
    return (
            <Switch>
                <Route exact path='/' ><Home/></Route>
                <Route exact path='/tuchiya' ><TuchiyaHistory/></Route>
                <Route exact path='/movie' ><Movie/></Route>
                <Route exact path='/event' ><Event/></Route>
                <Route exact path='/tuchista' ><Tuchista/></Route>
            </Switch>
    )
}

export default Move