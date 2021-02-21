import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GlobalContext } from './context/GlobalContext'
import Cookies from 'js-cookie'

import Alert from './components/Alert'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import Search from './containers/Search'
import PublicProfile from './containers/PublicProfile'
import BookingRecent from './containers/BookingRecent'
import Dashboard from './containers/Dashboard'
// client
import BookingSingleClient from './containers/Client/BookingSingle'
import ProfileClient from './containers/Client/Profile'
import ProfileEditClient from './containers/Client/ProfileEdit'
// driver
import BookingSingleDriver from './containers/Driver/BookingSingle'
import VehicleMy from './containers/Driver/VehicleMy'
import VehicleAdd from './containers/Driver/VehicleAdd'
import VehicleModify from './containers/Driver/VehicleModify'
import ProfileDriver from './containers/Driver/Profile'
import ProfileEditDriver from './containers/Driver/ProfileEdit'
// admin
import ApproveDriver from './containers/Admin/ApproveDriver'
import AdminSignin from './containers/Admin/Signin'

const App = () => {
  const global = useContext(GlobalContext)
  const type = Cookies.get('type')
  return (
    <>
      <Router>
        <Header />
        {/* show alert */}
        {global.alert.message && (
          <Alert alert={global.alert} event={global.setAlert} />
        )}
        {/* public routes */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/user/:id' children={<PublicProfile />} />
        </Switch>
        {/* non logged in routes */}
        {!type && (
          <Switch>
            <Route exact path='/admin/signin' component={AdminSignin} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        )}
        {/* client routes */}
        {type && type == 0 && (
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/booking' component={BookingRecent} />
            <Route
              exact
              path='/booking/:id'
              children={<BookingSingleClient />}
            />
            <Route exact path='/profile/edit' component={ProfileEditClient} />
            <Route exact path='/profile' component={ProfileClient} />
          </Switch>
        )}
        {/* driver routes */}
        {type && type == 1 && (
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/booking' component={BookingRecent} />
            <Route
              exact
              path='/booking/:id'
              children={<BookingSingleDriver />}
            />
            <Route exact path='/vehicle' component={VehicleMy} />
            <Route exact path='/vehicle/add' component={VehicleAdd} />
            <Route
              exact
              path='/vehicle/modify/:vehicleId'
              component={VehicleModify}
            />
            <Route exact path='/profile' component={ProfileDriver} />
            <Route exact path='/profile/edit' component={ProfileEditDriver} />
          </Switch>
        )}
        {/* admin routes */}
        {type && type == 2 && (
          <Switch>
            <Route exact path='/approve/driver' component={ApproveDriver} />
          </Switch>
        )}

        <Footer />
      </Router>
    </>
  )
}

export default App
