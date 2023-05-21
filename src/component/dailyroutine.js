import React, { Component } from 'react'
import '../component css/dailyroutine.css'
import Footer from './footer';
export default class Dailyroutine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: '',
      // ---
      tasks1: [],
      newTask1: '',
      // ---
      tasks2: [],
      newTask2: '',
      // ---
      tasks3: [],
      newTask3: '',
      // -----
      tasks4: [],
      newTask4: ''
    };
  }
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };
  handleInputChange1 = (event) => {
    this.setState({ newTask1: event.target.value });
  };
  handleInputChange2 = (event) => {
    this.setState({ newTask2: event.target.value });
  };
  handleInputChange3 = (event) => {
    this.setState({ newTask3: event.target.value });
  };
  handleInputChange4 = (event) => {
    this.setState({ newTask4: event.target.value });
  };
  addTask = () => {
    const { tasks, newTask } = this.state;
    const { tasks1, newTask1 } = this.state;
    const { tasks2, newTask2 } = this.state;
    const { tasks3, newTask3 } = this.state;
    const { tasks4, newTask4 } = this.state;
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      const updatedTasks1 = [...tasks1, newTask1];
      const updatedTasks2 = [...tasks2, newTask2];
      const updatedTasks3 = [...tasks3, newTask3];
      const updatedTasks4 = [...tasks4, newTask4];
      this.setState({ tasks: updatedTasks, newTask: ' ' });
      this.setState({ tasks1: updatedTasks1, newTask1: ' ' });
      this.setState({ tasks2: updatedTasks2, newTask2: ' ' });
      this.setState({ tasks3: updatedTasks3, newTask3: ' ' });
      this.setState({ tasks4: updatedTasks4, newTask4: ' ' });
    }
  };
  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };
  Reset = () =>{
    
  }
  render() {
    const { tasks, newTask } = this.state;
    const { tasks1, newTask1 } = this.state;
    const { tasks2, newTask2 } = this.state;
    const { tasks3, newTask3 } = this.state;
    const { tasks4, newTask4 } = this.state;
    return (
      <section className='container' id='allreset'>
        <div className='row fullcontent'>
          <h5 className='fs-4 DailyRoutine'>Daily-Routine</h5>
          <div className='col-lg-2 p-3'>
            <h5 className='fw-bold mt-2  text-secondary title1 '>Title : </h5>
            <h5 className='fw-bold mt-4  text-secondary  title1'>Name : </h5>
            <h5 className='fw-bold mt-4  text-secondary title1'>Subject : </h5>
            <h5 className='fw-bold mt-4  text-secondary title1' >Description : </h5>
            <h5 className=' fw-bold mt-5  text-secondary title1'>Calender : </h5>
          </div>
          <div className='col-lg-3'>
            <input type='text' className='form-control mt-3 ' placeholder='Title......' 
            value={newTask4} onChange={this.handleInputChange4}/>
            <input type='text' className='form-control mt-2' placeholder='Name......'
              value={newTask} onChange={this.handleInputChange} />
            <input type='text' className='form-control mt-2' placeholder='Subject......' 
            value={newTask1} onChange={this.handleInputChange1}/>
            <textarea type='text' className='form-control mt-3 ' placeholder='Description....'
              value={newTask2} onChange={this.handleInputChange2}></textarea>
            <input type='datetime-local' className='form-control mt-3' 
             value={newTask3} onChange={this.handleInputChange3}/>
          </div>
          <div className='col-lg-7 text-center'>
            <table className='table table-bordered '>
              <thead>
                <tr className='text-center bg-secondary text-white'>
                  <th>Title</th>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Description</th>
                  <th>Calender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td><h6 className='taskmaneger textarea1'>{tasks4}</h6></td>
                      <td><h6 className='taskmaneger textarea1'>{task}</h6></td>
                      <td><h6 className='taskmaneger textarea1'>{tasks1}</h6></td>
                      <td><h6 className='taskmaneger textarea1'>{tasks2}</h6></td>
                      <td><h6 className='taskmaneger'>{tasks3}</h6></td>
                      <td>
                      <button onClick={() => this.deleteTask(index)} className='btn btn-danger rounded-pill'>Delete</button>
                      {/* <button onClick={() => this.Edit(index)} className='btn btn-warning rounded-pill mx-2'>Edit</button> */}
                      </td>
                      <td></td>
                    </tr>
                  ))}
                
              </tbody>
            </table>
          </div>
        </div>
        {/* ----- */}
        <div className='row'>
          <div className='col-lg-1'></div>
          <div className='col-lg-4 p-3 text-center'>
            <button className='btn btn-primary text-center mt-5 button1 rounded-pill button1'
              onClick={this.addTask}>Add Task</button>
            <button className='btn btn-warning text-center mt-5 button2 mx-3 rounded-pill'
            onClick={this.Reset}><i class="fa fa-refresh" aria-hidden="true"></i> Reset Task</button>
          </div>
          <div className='col-lg-1'></div>
        </div>
          <Footer/>
      </section>
    )
  }
}
