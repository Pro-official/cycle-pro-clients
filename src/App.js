import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Explore from "./pages/Explore/Explore";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import BuyNow from "./pages/Home/Products/BuyNow";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute exact path="/buynow/:id">
              <BuyNow></BuyNow>
            </PrivateRoute>
            <Route exact path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <PrivateRoute exact path="/explore">
              <Explore></Explore>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
