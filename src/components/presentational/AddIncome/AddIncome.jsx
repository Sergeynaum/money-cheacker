import React, {Component} from 'react'
import './main.scss'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class AddIncome extends Component {
    render () {
        return (
            <form className="card card-body">
                <div className="form-group">
                    <label htmlFor="inputTransactionName" className="required">Input transaction name</label>
                    <input type="text" className="form-control" id="inputTransactionName" placeholder="Transaction name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="selectCategory">Select category of Income</label>
                    <select className="form-control" id="selectCategory" required>
                        <option>Hygiene</option>
                        <option>Foods</option>
                        <option>Housing</option>
                        <option>Health</option>
                        <option>Cafe</option>
                        <option>Car</option>
                        <option>Clothes</option>
                        <option>Pets</option>
                        <option>Gifts</option>
                        <option>Entertainment</option>
                        <option>Communication</option>
                        <option>Sport</option>
                        <option>Bills</option>
                        <option>Taxi</option>
                        <option>Transport</option>
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

export default AddIncome