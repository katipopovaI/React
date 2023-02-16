//import logo from './logo.svg';
import React from "react";
import "./App.css";

//компоненты
const Header = () => {
  return <h1>Hello world</h1>;
};

// const Field = () => {
//   const holder = "type here";
//   const fieldStyle = {
//     width: "300px",
//   };
//   return <input placeholder={holder} type="text" style={fieldStyle} />;
//   // return <input placeholder="type here" type="text" />;
// };

//классовые компоненты!!!!! старые нотмного написано на них вновых не использовать
class Field extends React.Component {
  render() {
    const holder = "type here";
    const fieldStyle = {
      width: "300px",
    };
    return <input placeholder={holder} type="text" style={fieldStyle} />;
  }
}

function Btn() {
  // const text = "Log in";
  // return <button>{text}</button>;
  const text = "log";
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>; //нельзя записывать через if
}

function Btn1() {
  const res = () => {
    return "log in";
  };
  return <button>{res()}</button>;
}

function Btn2() {
  const span = <span>Log in</span>;
  return <button>{span}</button>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <React.StrictMode>
        <Btn />
        <Btn1 />
        <Btn2 />
      </React.StrictMode>
    </div>
  );
}

export { Header };
export default App;
