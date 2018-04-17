import React, {Component} from 'react'
import logo from '../../../sorces/logo.png'
import './main.scss'


class MonthAfter extends Component {
    render () {
        return (
            <div className="col-4">
               <img src={logo} alt="logo"/>
            </div>
        )
    }
}

export default MonthAfter