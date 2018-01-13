import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Profile from './component/profile/Profile';
import Shop from './component/shop/Shop';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/shop' component={Shop}/>
        <Route path='/profile' component={Profile}/>
    </Switch>
)