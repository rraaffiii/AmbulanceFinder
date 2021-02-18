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
import BookingRecent from './containers/BookingRecent'
// client
import BookingSingleClient from './containers/Client/BookingSingle'
import ProfileClient from './containers/Client/Profile'
import ProfileEditClient from './containers/Client/ProfileEdit'
import Checkout from './containers/Client/Checkout'
import Invoice from './containers/Client/Invoice'
// driver
import BookingSingleDriver from './containers/Driver/BookingSingle'
import VehicleMy from './containers/Driver/VehicleMy'
import VehicleAdd from './containers/Driver/VehicleAdd'
import VehicleModify from './containers/Driver/VehicleModify'
import ProfileDriver from './containers/Driver/Profile'
import ProfileEditDriver from './containers/Driver/ProfileEdit'
// admin
import ApproveDriver from './containers/Admin/ApproveDriver'
import Stats from './containers/Admin/Stats'

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

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/checkout' component={Checkout} />
          {/* client */}
          {type && type == 0 && (
            <Switch>
              <Route exact path='/booking' component={BookingRecent} />
              <Route
                exact
                path='/booking/:id'
                children={<BookingSingleClient />}
              />
              <Route exact path='/invoice/:bookId' component={Invoice} />
              <Route exact path='/profile' component={ProfileClient} />
              <Route exact path='/profile/edit' component={ProfileEditClient} />
            </Switch>
          )}
          {/* driver */}
          {type && type == 1 && (
            <Switch>
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
          {/* admin */}
          {type && type == 2 && (
            <Switch>
              <Route exact path='/approve/driver' component={ApproveDriver} />
              <Route exact path='/stats' component={Stats} />
            </Switch>
          )}
          {!type && (
            <Switch>
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          )}
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
