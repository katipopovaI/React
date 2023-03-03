import { Component } from "react";

import "./employees-add-form.css";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onValueChange = (e) => {
    this.setState({
      //[]синтаксис es6 тк записывается составное свойство в обьект
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const name = this.state.name;
    const salary = this.state.salary;

    if (name && salary) {
      this.props.addItem(name, salary);
    }

    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    // const EmployeesAddForm = () => {

    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
            // required
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            // onClick={addItem}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
