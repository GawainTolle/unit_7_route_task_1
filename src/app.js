import React from "react";
import { Switch, Route } from "react-router-dom";
import NavPanel from "./layouts/navPanel";
import Main from "./layouts/main";
import Login from "./layouts/login";
import Users from "./components/users";
import User from "./layouts/user";

const App = () => {
  return (
    <div>
      <NavPanel />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/users/:lol" component={User} />
        <Route path="/users" component={Users} />
      </Switch>
    </div>
  );
};

export default App;
