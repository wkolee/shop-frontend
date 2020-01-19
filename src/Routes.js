import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import PrivateRoute  from "./auth/PrivateRoute";
import Profile  from "./user/UserProfile";
import AdminRoute from "./auth/AdminRoute";
import AdminProfile from "./user/AdminProfile";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Shop from './core/Shop'
import Product from "./core/Product";
import Cart from "./core/Cart";
import Orders from "./admin/Orders"
import Dashboard from "./user/Dashboard";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";





const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <PrivateRoute
                    path="/user/profile"
                    exact
                    component={Profile}
                />
                <AdminRoute
                    path="/admin/profile"
                    exact
                    component={AdminProfile}
                />
                 <AdminRoute
                    path="/create/category"
                    exact
                    component={AddCategory}
                />
                 <AdminRoute
                    path="/create/product"
                    exact
                    component={AddProduct}
                />
                <AdminRoute
                    path="/admin/orders"
                    exact
                    component={Orders}
                />
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <PrivateRoute
                    path="/profile/:userId"
                    exact
                    component={Dashboard}
                />
                <AdminRoute
                    path="/admin/products"
                    exact
                    component={ManageProducts}
                />
                 <AdminRoute
                    path="/admin/product/update/:productId"
                    exact
                    component={UpdateProduct}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

