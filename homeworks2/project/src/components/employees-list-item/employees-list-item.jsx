import { Component } from "react";

import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({
      increase: !increase,
    }));
  };

  onRise = () => {
    this.setState(({ rise }) => ({
      rise: !rise,
    }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, rise } = this.state; //increase приходит из state

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      classNames += " increase";
    }
    if (rise) {
      classNames += " like";
    }
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onRise}>
          {name}
        </span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-cookie btn-sm "
            onClick={this.onIncrease}
          >
            <i className="fas fa-cookie"></i>
          </button>

          <button
            type="button"
            className="btn-trash btn-sm "
            onClick={onDelete}
          >
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
// //Классовый компонент
//import classNames from "classnames";
// const EmployeesListItem = ({ name, salary, increase }) => {
//   return (
//     <li
//       className={classNames("list-group-item d-flex justify-content-between", {
//         increase: increase,
//       })}
//     >
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="text"
//         className="list-group-item-input"
//         defaultValue={salary + "$"}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm ">
//           <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };

//Функциональный компонент
// const EmployeesListItem = ({ name, salary, increase }) => {
//   let classNames = "list-group-item d-flex justify-content-between";
//   if (increase) {
//     classNames += " increase";
//   }
//   return (
//     // <li className="list-group-item d-flex justify-content-between">
//     <li className={classNames}>
//       <span className="list-group-item-label">{name}</span>
//       <input
//         type="text"
//         className="list-group-item-input"
//         defaultValue={salary + "$"}
//       />
//       <div className="d-flex justify-content-center align-items-center">
//         <button type="button" className="btn-cookie btn-sm ">
//           <i className="fas fa-cookie"></i>
//         </button>

//         <button type="button" className="btn-trash btn-sm ">
//           <i className="fas fa-trash"></i>
//         </button>
//         <i className="fas fa-star"></i>
//       </div>
//     </li>
//   );
// };
