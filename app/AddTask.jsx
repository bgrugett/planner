import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in AddTask ', this.props);
  }

  render() {
    return (
      <div>
        <h3>Add Maintenance Task</h3>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.props.name} onChange={this.props.handleChangeName} />
          </label>
          <label>
            Date: Month:
            <select value={this.props.month} onChange={this.props.handleChangeMonth} >
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
            <input type="text" value={this.props.day} onChange={this.props.handleChangeDay} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default AddTask;
