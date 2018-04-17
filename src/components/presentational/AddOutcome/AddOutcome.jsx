import React, {Component} from 'react'
import './main.scss'
import FaMinusCircle from 'react-icons/lib/fa/minus-circle'


class AddOutcome extends Component {
    render () {
        return (
            <div className="col-4">
               <button className="btn btn-danger btn-lg"><FaMinusCircle /></button>
            </div>
        )
    }
}

export default AddOutcome