import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routers from '../../../routes/routes'
import './main.scss'


class MainContainer extends Component {
    render () {
        return (
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        )
    }
}

export default MainContainer