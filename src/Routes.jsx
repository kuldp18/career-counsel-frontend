import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import StudentDashboard from './pages/StudentDashboard';
import CounsellorDashboard from './pages/CounsellorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './auth/helper/AdminRoute';
import PrivateRoute from './auth/helper/PrivateRoute';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <PrivateRoute
          path="/student/dashboard"
          exact
          component={StudentDashboard}
        />
        <PrivateRoute
          path="/counsellor/dashboard"
          exact
          component={CounsellorDashboard}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
