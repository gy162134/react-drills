import React from 'react'
import {Switch, Route} from 'react-router-dom'
import People from './People'
import Details from './Details'

export default(
    <Switch>
        <Route component={People} exact path='/'/>
        <Route component={Details} path="/details/:id"/>
    </Switch>
)