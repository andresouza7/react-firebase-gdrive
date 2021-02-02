import React from "react"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// auth routes
import Signup from "./authentication/Signup"
import Profile from "./authentication/Profile"
import Login from "./authentication/Login"
import PrivateRoute from "./authentication/PrivateRoute"
import ForgotPassword from "./authentication/ForgotPassword"
import UpdateProfile from "./authentication/UpdateProfile"
import CenteredContainer from "./authentication/CenteredContainer"
// drive routes
import Dashboard from "./gdrive/Dashboard"

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/folder/:folderId" component={Dashboard} />

          <CenteredContainer>
            {/* Profile */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />

            {/* Auth */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </CenteredContainer>
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App
