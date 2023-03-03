import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John C.", salary: 800, increase: false, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, id: 3 },
      ],
    };
    this.maxId = 4; //для добавления нового id
  }

  deleteItem = (id) => {
    // console.log(id);
    this.setState(({ data }) => {
      // const index = data.findIndex((el) => el.id === id);
      // console.log(index);
      // нарушение иммутабельности
      // data.splice(index,1);
      // return{
      //   //можно написать просто data
      //   data:data,
      // };
      // длинный метод
      // const before=data.slice(0,index);
      // const after=data.slice(index+1);
      // const newArray=[...before, ...after];
      // return{
      //   data:newArray,
      // };
      // лучший метод
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name: name,
      salary: salary,
      increase: false,
      id: this.maxId++,
    };

    this.setState(({ data }) => {
      const newArray = [...data, newItem];
      return {
        data: newArray,
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          // onDelete={(id) => console.log(id)}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;

//Функциональный
// function App() {
//   const data = [
//     { name: "John C.", salary: 800, increase: false, id: 1 },
//     { name: "Alex M.", salary: 3000, increase: true, id: 2 },
//     { name: "Carl W.", salary: 5000, increase: false, id: 3 },
//   ];
//   return (
//     <div className="app">
//       <AppInfo />

//       <div className="search-panel">
//         <SearchPanel />
//         <AppFilter />
//       </div>

//       <EmployeesList data={data} />
//       <EmployeesAddForm />
//     </div>
//   );
// }
