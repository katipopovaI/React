// import { Component } from "react";

import "./employees-list-item.css";
// !!!!!!Возврат к функциональному компоненту!!!!!!!
// class EmployeesListItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       increase: false,
//       rise: false,
//     };
//   }
// //заменили на onToggleIncrease, onToggleRise
//   // onIncrease = () => {
//   //   this.setState(({ increase }) => ({
//   //     increase: !increase,
//   //   }));
//   // };

//   // onRise = () => {
//   //   this.setState(({ rise }) => ({
//   //     rise: !rise,
//   //   }));
//   // };

//   render() {
//     const { name, salary, onDelete, onToggleIncrease, onToggleRise } =
//       this.props;
//     const { increase, rise } = this.state; //increase приходит из state

//     let classNames = "list-group-item d-flex justify-content-between";
//     if (increase) {
//       classNames += " increase";
//     }
//     if (rise) {
//       classNames += " like";
//     }
//     return (
//       <li className={classNames}>
//         {/* <span className="list-group-item-label" onClick={this.onRise}> */}
//         <span className="list-group-item-label" onClick={onToggleRise}>
//           {name}
//         </span>
//         <input
//           type="text"
//           className="list-group-item-input"
//           defaultValue={salary + "$"}
//         />
//         <div className="d-flex justify-content-center align-items-center">
//           <button
//             type="button"
//             className="btn-cookie btn-sm "
//             onClick={onToggleIncrease}
//           >
//             <i className="fas fa-cookie"></i>
//           </button>

//           <button
//             type="button"
//             className="btn-trash btn-sm "
//             onClick={onDelete}
//           >
//             <i className="fas fa-trash"></i>
//           </button>
//           <i className="fas fa-star"></i>
//         </div>
//       </li>
//     );
//   }
// }

// !!!!!!Возврат к функциональному компоненту!!!!!!!
//Функциональный компонент
const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    // onToggleIncrease,
    // onToggleRise,
    onToggleProp,
    increase,
    rise,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }
  return (
    // <li className="list-group-item d-flex justify-content-between">
    <li className={classNames}>
      <span
        className="list-group-item-label"
        // onClick={onToggleRise}
        onClick={onToggleProp}
        data-toggle="rise"
      >
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
          // onClick={onToggleIncrease}
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

// !!!!!!Возврат к функциональному компоненту!!!!!!!

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
