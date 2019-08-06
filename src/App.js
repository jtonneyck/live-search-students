import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import students from "./WonderfulPeople.json";
import Student from "./Student";
class App extends Component {

  constructor(props) {
    super(props)

  }

  state = {
    counter: 0,
    students: students,
    searchedStudents: students
  }

  increment = ()=> {
    this.setState({counter: this.state.counter + 1});
  }

  reset = (index)=> {
    this.setState({counter: 0});
  }

  remove = (index)=> {
    let studentsCopy = [...this.state.students];
    studentsCopy.splice(index, 1);
    this.setState({students: studentsCopy});
  }

  search = (event)=> {
    let searchTerm = event.target.value;
    debugger
    let searchedStudents = this.state.students.filter((student)=> (
        student.firstname.indexOf(searchTerm) >= 0 ||
        student.lastname.indexOf(searchTerm) >= 0
    ))
    debugger  
    this.setState({students: searchedStudents})
  }
  render() {
    debugger
    let studentComponents = this.state.searchedStudents.map((student, index)=> {
      return (
          <Student 
                index={index}
                removeStudent={this.remove}
                firstname={student.firstname} 
                lastname={student.lastname} 
          />
    )})

    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment Counter</button>
        <button onClick={this.reset}>Reset</button>
        <input onChange={this.search} placeholder="search" type="text"/>
        {studentComponents}
      </div>
    );
  }
}

export default App;
