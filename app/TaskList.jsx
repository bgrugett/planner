// Required libraries
import React from 'react';

// ------------- Component
class TaskList extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in taskList ', this.props.list);
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <ul>
        { this.props.list.map(task => (
          <li key={task.id}>{task.name}{task.month}{task.day}</li>
          )
        )}
        </ul>
      </div>
    );
  }
}

export default TaskList;
