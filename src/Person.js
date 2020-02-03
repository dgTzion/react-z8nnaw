import React from "react";
import "./Person.css";

class Person extends React.Component {
  render() {
    return (
      <div className="Person" key={this.props.name}>
        <div style={{ color: this.props.color }}>
          {this.props.name}
          <button
            className="remove"
            data-name={this.props.name}
            onClick={this.props.remove}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Person;
