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
        { name: "John C.", salary: 800, increase: false, rise: true, id: 1 },
        { name: "Alex M.", salary: 3000, increase: true, rise: false, id: 2 },
        { name: "Carl W.", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: "",
      filter: "all",
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

  // //печенька
  // onToggleIncrease = (id) => {
  //   // console.log(`Increase this ${id}`);
  //   // //Обычный способ
  //   // this.setState(({ data }) => {
  //   //   const index = data.findIndex((el) => el.id === id);
  //   //   ////получаем старый обьект
  //   //   const old = data[index];
  //   //   ////создаем новый обьект
  //   //   const newItem = { ...old, increase: !old.increase };
  //   //   const newArr = [
  //   //     ...data.slice(0, index),
  //   //     newItem,
  //   //     ...data.slice(index + 1),
  //   //   ];
  //   //   return {
  //   //     data: newArr,
  //   //   };
  //   // });
  //   // //более сложный и короткий способ
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase };
  //       }
  //       return item;
  //     }),
  //   }));
  // };

  // onToggleRise = (id) => {
  //   // console.log(`Rise this ${id}`);
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise };
  //       }
  //       return item;
  //     }),
  //   }));
  // };
  //общий метод вместо onToggleRise onToggleIncrease
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.lenght === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  //term-введенная строка
  onUpdateSearch = (term) => {
    //({term:term}) можно заменить на 1 слово если они одинаковы
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };
  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((el) => el.increase).length;
    // const visibleData = this.searchEmp(data, term);
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo increased={increased} employees={employees} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          //data={this.state.data}
          // onDelete={(id) => console.log(id)}
          data={visibleData}
          onDelete={this.deleteItem}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
          onToggleProp={this.onToggleProp}
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
