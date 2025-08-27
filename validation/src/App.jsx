import "./App.css";
import TaskForm from "./components/Taskform";
import TaskList from "./components/Tasklist";
import Form from "./components/form";
import Form2 from "./components/form2";
import Form3 from "./components/form3";

const App = () => {
  return (
    <>
      <h1 className="head">Form validations</h1>
      <div className="flex flex-col justify-center items-center h-screen">
        {/* <TaskForm/> */}
        {/* <TaskList/> */}
        {/* <Form /> */}
        {/* <Form2/> */}
        <Form3/>
      </div>
    </>
  );
};

export default App;