import React, {Component} from 'react'
import AddIncome from '../AddIncome/AddIncome'
import AddOutcome from '../AddOutcome/AddOutcome'
import TotalResult from '../TotalResult/TotalResult'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import FaMinusCircle from 'react-icons/lib/fa/minus-circle'
import './main.scss'

class HeaderRow extends Component {
    render () {
        return (
            <div className="row manage-panel">
               <div className="col-4">
                    <button className="btn btn-danger btn-lg"><FaMinusCircle /></button>
                </div>
                <div className="col-4 circle">
                    <div className="now-month">Now Month</div>
                    <div className="now-month">Total income:</div>
                    <div className="now-month">Total outcome:</div>
                </div>
                <div className="col-4">
                    <button className="btn btn-success btn-lg"><FaPlusCircle /></button>
                </div>
            </div>
        )
    }
}

export default HeaderRow