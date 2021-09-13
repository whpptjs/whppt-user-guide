import { Route, Switch, Redirect, useLocation } from "react-router-dom";
// import { Login } from "./Login";
import { Home } from "./Home";

export const PublicRouter = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* <Route path="/login" component={Login} /> */}
      <Redirect to="/home" />
    </Switch>
  );
};
