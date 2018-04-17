import React, {Component} from 'react'
import MainPage from '../MainPage/MainPage'
import AddIncome from '../AddIncome/AddIncome'
import AddOutcome from '../AddOutcome/AddOutcome'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './main.scss'


class MainContainer extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ MainPage } />
                    <Route path="/add-income" component={ AddIncome } />
                    <Route path="/add-outcome" component={ AddOutcome } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default MainContainer