import React, {Component} from 'react'
import './main.scss'


class TotalResult extends Component {
    render () {
        return (
            <div className="col-4">
                <div className="now-month">Now Month</div>
                <div className="now-month">Total income:</div>
                <div className="now-month">Total outcome:</div>
            </div>
        )
    }
}

export default TotalResult