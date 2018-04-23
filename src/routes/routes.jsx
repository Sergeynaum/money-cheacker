import React, {Component} from 'react'
import MainPage from '../components/presentational/MainPage/MainPage'
import AddIncome from '../components/presentational/AddIncome/AddIncome'
import AddOutcome from '../components/presentational/AddOutcome/AddOutcome'
import { Route, Switch } from 'react-router-dom'


class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ MainPage } />
                <Route path="/add-income" component={ AddIncome } />
                <Route path="/add-outcome" component={ AddOutcome } />
            </Switch>
        )
    }
}

export default Routers