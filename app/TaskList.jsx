// Required libraries
import React from 'react';
import {yearClass, sortTask, monthLookUp} from '../utility';

// ------------- Component
class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const sortedTaskList = sortTask(this.props.list);
    return (
      <div>
        <h1>Home Maintenance Task List</h1>
        <ul>
        { sortedTaskList.map(task => (
          <li key={task.id} className={yearClass(task.year)}>
            <button className="btn btn-primary btn-sm" onClick={() => this.props.onButtonClick(task.id)}>X</button>
            {task.name} {monthLookUp(task.month)} {task.day}
          </li>
          )
        )}
        </ul>
      </div>
    );
  }
}

export default TaskList;
