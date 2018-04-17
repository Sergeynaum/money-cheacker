import React, {Component} from 'react'
import './main.scss'
import FaMinusCircle from 'react-icons/lib/fa/minus-circle'


class AddOutcome extends Component {
    render () {
        return (
            <form className="card card-body">
                <div className="form-group">
                    <label htmlFor="inputTransactionName" className="required">Input transaction name</label>
                    <input type="text" className="form-control" id="inputTransactionName" placeholder="Transaction name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="selectCategory">Select category of Outcome</label>
                    <select className="form-control" id="selectCategory" required>
                        <option>Salary</option>
                        <option>Saving</option>
                        <option>Deposit</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAmountOfOutcome">Amount of outcome</label>
                    <input type="number" min="1" className="form-control" id="inputAmountOfOutcome" placeholder="Amount of outcome" required/>
                </div>
                <div className="buttons">
                    <button className="btn btn-success">Add transaction</button>
                    <button className="btn btn-danger">Cancel transaction</button>
                </div>
            </form>
        )
    }
}

export default AddOutcome