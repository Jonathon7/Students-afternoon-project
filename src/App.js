import React, { Component } from "react";
import "./App.css";
import students from "./Students";
import Navigation from "./Navigation";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();

    this.state = {
      students: students,
      count: 1,
      isActive: false,
      name: "",
      from: "",
      funFact: "",
      cityOrCountry: "",
      indoorsOrOutdoors: "",
      travel: "",
      food: "",
      pet: ""
    };
  }

  handleClick = () => {
    if (this.state.count < this.state.students.length) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };

  handleClickB = () => {
    if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  handleDelete = () => {
    let deleteArr = this.state.students.filter((student, index) => {
      return this.state.count !== index + 1;
    });
    this.setState({
      students: deleteArr
    });
  };

  handleSubmit = () => {
    let newArr = [
      ...this.state.students,
      {
        name: this.state.name,
        from: this.state.from,
        funFact: this.state.funFact,
        cityOrCountry: this.state.cityOrCountry,
        indoorsOrOutdoors: this.state.indoorsOrOutdoors,
        travel: this.state.travel,
        food: this.state.food,
        dogOrCat: this.state.pet
      }
    ];

    this.setState({
      students: newArr,
      name: "",
      from: "",
      funFact: "",
      cityOrCountry: "",
      indoorsOrOutdoors: "",
      travel: "",
      food: "",
      pet: "",
      isActive: false
    });
  };

  handleNew = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    let dispStudents = this.state.students.map((student, index) => {
      if (this.state.count === index + 1) {
        return (
          <Card
            index={index + 1}
            length={this.state.students.length}
            name={student.name}
            from={student.from}
            funFact={student.funFact}
            cityOrCountry={student.cityOrCountry}
            indoorsOrOutdoors={student.cityOrCountry}
            travel={student.travel}
            food={student.food}
            dogOrCat={student.dogOrCat}
          />
        );
      }
    });
    return (
      <div className="App-container">
        <Navigation home="Home" directory="DevMountain Directory" />
        {dispStudents}
        <div className="buttons-container">
          <button className="button1" onClick={this.handleClickB}>
            Previous
          </button>
          <button>Edit</button>
          <button onClick={this.handleDelete}>Delete</button>
          <button onClick={this.handleNew}>New</button>
          <div className={this.state.isActive ? "shown" : "not-shown"}>
            <h4>Name: </h4>
            <input
              value={this.state.name}
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <h4>From: </h4>
            <input
              value={this.state.from}
              type="text"
              onChange={e => this.setState({ from: e.target.value })}
            />
            <h4>Fun Fact: </h4>
            <input
              value={this.state.funFact}
              type="text"
              onChange={e => this.setState({ funFact: e.target.value })}
            />
            <h4>City or Country?</h4>
            <input
              value={this.state.cityOrCountry}
              type="text"
              onChange={e => this.setState({ cityOrCountry: e.target.value })}
            />
            <h4>Indoors or Outdoors?</h4>
            <input
              value={this.state.indoorsOrOutdoors}
              type="text"
              onChange={e =>
                this.setState({ indoorsOrOutdoors: e.target.value })
              }
            />
            <h4>Travel everyday or stay Home?</h4>
            <input
              value={this.state.travel}
              type="text"
              onChange={e => this.setState({ travel: e.target.value })}
            />
            <h4>Top's or Subway?</h4>
            <input
              value={this.state.food}
              type="text"
              onChange={e => this.setState({ food: e.target.value })}
            />
            <h4>Dog or Cat?</h4>
            <input
              value={this.state.pet}
              type="text"
              onChange={e => this.setState({ pet: e.target.value })}
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
          <button className="button2" onClick={this.handleClick}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
