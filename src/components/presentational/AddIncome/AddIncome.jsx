import React, {Component} from 'react'
import './main.scss'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class AddIncome extends Component {
    render () {
        return (
            <div className="col-4">
               <button className="btn btn-success btn-lg"><FaPlusCircle /></button>
            </div>
        )
    }
}

export default AddIncome