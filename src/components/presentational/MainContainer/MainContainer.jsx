import React, {Component} from 'react'
import MainPage from '../MainPage/MainPage'
import TestComponent from '../TestComponent/TestComponent'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './main.scss'


class MainContainer extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ MainPage } />
                    <Route path="/test" component={ TestComponent } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainContainer