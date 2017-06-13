// Required libraries
import React from 'react';
import AddTask from './AddTask.jsx';

// ------------- Component
class Root extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
     <div>
      <AddTask />
     <div>
       {this.props.children ? this.props.children : null}
     </div>
        <footer>
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; Home Maintenance Planner 2017</p>
                </div>
            </div>
        </footer>
    </div>
    );
  }
}

export default Root;
