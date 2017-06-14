// Required libraries
import React from 'react';
import axios from 'axios';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { nyear, dayValid } from '../utility';

// ------------- Component
class Root extends React.Component {
  constructor() {
    super();
    this.state = {taskList: [],
                    name: '',
                    month: 1,
                    day: 1
                  };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
    this.handleChangeDay = this.handleChangeDay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeMonth(event) {
    this.setState({ month: event.target.value });
  }

  handleChangeDay(event) {
    const newDay = event.target.value;
      this.setState({ day: newDay });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!dayValid(this.state.month, this.state.day)) {
      console.error('day is invalid, months =', this.state.month, ' day =', this.state.day);
    }
    this.addItem({name: this.state.name, month: this.state.month, day: this.state.day,
       year: nyear(this.state.month, this.state.day) });
  }

  onButtonClick(id) {
    axios.delete(`/api/tasks/${id}`)
      .then(this.fetchAllTasks())
      .catch(console.error);
  }

  addItem(taskData) {
    axios.post('/api/tasks', taskData)
      .then(this.fetchAllTasks())
      .catch(console.error);
  }

  fetchAllTasks() {
    axios.get('/api/tasks')
      .then(response => {
      this.setState({taskList: response.data});
    })
      .catch(console.error);
  }

  componentDidMount() {
    this.fetchAllTasks();
  }

  render() {
    return (
     <div>
      <AddTask
        handleChangeName={this.handleChangeName}
        handleChangeDay={this.handleChangeDay}
        handleChangeMonth={this.handleChangeMonth}
        name={this.state.name}
        day={this.state.day}
        month={this.state.month}
        handleSubmit={this.handleSubmit}
      />
     <div>
       <TaskList
         list={this.state.taskList}
         onButtonClick={this.onButtonClick}
       />
     </div>
        <footer>
            <div className="row">
                <div className="col-sm-12">
                    <p>Copyright &copy; Home Maintenance Planner 2017</p>
                </div>
            </div>
        </footer>
    </div>
    );
  }
}

export default Root;
