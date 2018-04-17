import React, {Component} from 'react'
import MonthBefore from '../MonthBefore/MonthBefore'
import MonthAfter from '../MonthAfter/MonthAfter'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import './main.scss'


class HeaderRow extends Component {
    render () {
        return (
            <div className="row top-line">
               <MonthBefore />
               <HeaderLogo />
               <MonthAfter />
            </div>
        )
    }
}

export default HeaderRow