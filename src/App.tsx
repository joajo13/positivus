import { Route, Switch, Redirect } from "wouter";
import { HomePage } from "@Pages/home/HomePage";

// Dummy authentication function
const isAuthenticated = () => {
  // Replace with actual authentication logic
  return true;
};

// Public and Private components
const Dashboard = () => <h1>Dashboard</h1>;
const Login = () => <h1>Login</h1>;

// Private Route component
const PrivateRoute = ({ component: Component, ...rest }) =>
  isAuthenticated() ? <Component {...rest} /> : <Redirect to="/login" />;

function App() {

  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
