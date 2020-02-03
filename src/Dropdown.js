import React from "react";
import "./Dropdown.css";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.dropDownContent = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.toggleDropDown();
  }
  toggleDropDown() {
    var el = this.dropDownContent.current;
    el.style.display = el.style.display === "none" ? "block" : "none";
  }

  render() {
    return (
      <div className="Dropdown">
        <button className="btn" onClick={this.handleClick}>
          &nbsp;
        </button>
        <ul
          ref={this.dropDownContent}
          className="dropdown-content"
          style={{ display: "none" }}
        >
          {this.props.people.map((ppl, i) => {
            return (
              <li key={i} style={{ color: ppl.eye_color }}>
                {ppl.name}
                <button
                  className="remove"
                  data-name={ppl.name}
                  onClick={event => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.toggleDropDown();
                    this.props.remove(event);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
