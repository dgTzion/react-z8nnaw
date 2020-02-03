import React, { Component } from "react";
import Person from "./Person";
import Dropdown from "./Dropdown";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.handleRemove = this.handleRemove.bind(this);

    this.state = {
      name: "React",
      people: []
    };

    fetch("/api/people").then(response => {
      return response.json().then(json => {
        var people = json.results.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({ people });
      });
    });
  }

  handleRemove(event) {
    event.preventDefault();
    var name = event.target.dataset.name;
    var people = this.state.people;
    console.log(name);
    people.splice(people.findIndex(e => e.name === name), 1);
    console.log(people);
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.people.length ? (
            <h1 className="loading">Loading...</h1>
          ) : (
            <React.Fragment>
              <Dropdown people={this.state.people} remove={this.handleRemove} />
              {this.state.people.map(ppl => {
                return (
                  <Person
                    key={ppl.name}
                    name={ppl.name}
                    remove={this.handleRemove}
                    color={ppl.eye_color}
                  />
                );
              })}
            </React.Fragment>
          )}
        </header>
      </div>
    );
  }
}

export default App;
