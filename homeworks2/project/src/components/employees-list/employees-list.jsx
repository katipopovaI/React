import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({
  data,
  onDelete,
  onToggleIncrease,
  onToggleRise,
  onToggleProp,
}) => {
  // используем spread
  const elements = data.map((item) => {
    // return <EmployeesListItem {...item} />;
    // аналогичная запись
    // return <EmployeesListItem name={item.name} salary={item.salary}/>;

    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        // onDelete={() => console.log("Deleted")}
        onDelete={() => onDelete(id)}
        // onToggleIncrease={() => onToggleIncrease(id)}
        // onToggleRise={() => onToggleRise(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};
// return (
//   // <ul className="app-list list-group">
//   //   <EmployeesListItem name="John" salary={800} />
//   //   <EmployeesListItem name="Alex" salary={3000} />
//   //   <EmployeesListItem name="Carl" salary={5000} />
//   // </ul>
// );

export default EmployeesList;
