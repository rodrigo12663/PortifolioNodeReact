import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';

export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/sobre' component={Sobre}/>
                <Route path='' component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}
