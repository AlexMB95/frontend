import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
//import axios from 'axios';
import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import AddTask from "./components/organisms/AddTask";
import AllTask from "./components/organisms/AllTask";
import CompleteTask from "./components/organisms/CompleteTask";
import IncompleteTask from "./components/organisms/IncompleteTask";
import SignUp from "./components/organisms/SignUp";
import UpdateTask from "./components/organisms/UpdateTask";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>Login</Link>
          <Link className="nav-item nav-link" to={"/sign-up"}>Crear usuarios</Link>
        </div>
      </nav>
      <Switch>
        <div className="container">
          <Route exact path="/">
            <h1>Login</h1>
          </Route>
          <Route path="/sign-up" component={SignUp}></Route>
          <Route path="/add-task" component={AddTask}></Route>
          <Route path="/all-task" component={AllTask}></Route>
          <Route path="/update-task" component={UpdateTask}></Route>
          <Route path="/complete-task" component={CompleteTask}></Route>
          <Route path="/incomplete-task" component={IncompleteTask}></Route>
          <Route path="/secret">
            <h1>Logged In</h1>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;