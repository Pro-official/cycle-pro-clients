import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import Payment from "../Payment/Payment";
import AllOrders from "../AllOrders/AllOrders";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AuthProvider from "../../../contexts/AuthProvider/AuthProvider";

const drawerWidth = 180;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />

      <Link
        style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
        to={`${url}`}
      >
        <Button color="inherit">Dashboard</Button>
      </Link>
      <Link
        style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
        to={`${url}/myorders`}
      >
        <Button color="inherit">My Orders</Button>
      </Link>
      <Link
        style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
        to={`${url}/review`}
      >
        <Button color="inherit">Review</Button>
      </Link>
      <Link
        style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
        to={`${url}/payment`}
      >
        <Button color="inherit">Payment</Button>
      </Link>
      {admin && (
        <Box>
          <Link
            style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
            to={`${url}/allorders`}
          >
            <Button color="inherit">All Orders</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
            to={`${url}/addproduct`}
          >
            <Button color="inherit">Add Product</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
            to={`${url}/makeadmin`}
          >
            <Button color="inherit">Make Admin</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", fontWeight: 700, color: "black" }}
            to={`${url}/manageproducts`}
          >
            <Button color="inherit">Manage Products</Button>
          </Link>
        </Box>
      )}
      <Button onClick={logout} color="inherit">
        Logout
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <Link
              style={{
                marginLeft: "20px",
                textDecoration: "none",
                // fontWeight: 700,
                color: "White",
              }}
              to="/home"
            >
              HOME
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <AuthProvider>
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/myorders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <AdminRoute path={`${path}/allorders`}>
              <AllOrders></AllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </AuthProvider>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
