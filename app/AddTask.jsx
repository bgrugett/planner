import React from 'react';
import axios from 'axios';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  month: 1,
                  day: 1
                };
    ``
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    console.log('current month and day ', currentMonth, ' ', currentDay);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeMonth(event) {
    this.setState({month: event.target.value});
  }

  handleChangeDay(event) {
    this.setState({day: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addItem(this.state);
  }

  addItem(taskData) {
    axios.post('/api/tasks', taskData)
      .then( )
      .catch(console.error);
  }


  render() {
    console.log('state in addTask ', this.state);
    return (
      <div>
        <h3>Add Maintenance Task</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label>
            Date: Month:
            <select value={this.state.month} onChange={this.handleChangeMonth} >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </label>
          <label>
            Day:
            <input type="text" value={this.state.day} onChange={this.handleChangeDay} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddTask;
