import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import BookingRequest from './containers/BookingRequest'
import BookingRecent from './containers/BookingRecent'
import BookingSingle from './containers/BookingSingle'
import Checkout from './containers/Checkout'
import Search from './containers/Search'
import Vehicles from './containers/Vehicles'
import VehicleAdd from './containers/VehicleAdd'
import ApproveDriver from './containers/ApproveDriver'
import Stats from './containers/Stats'
import Profile from './containers/Profile'
import ProfileEdit from './containers/ProfileEdit'
import Invoice from './containers/Invoice'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/booking-request' component={BookingRequest} />
          <Route exact path='/booking-recent' component={BookingRecent} />
          <Route exact path='/booking/:id' children={<BookingSingle />} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/vehicles' component={Vehicles} />
          <Route exact path='/vehicle-add' component={VehicleAdd} />
          <Route exact path='/approve-driver' component={ApproveDriver} />
          <Route exact path='/stats' component={Stats} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/profile/:id/edit' component={ProfileEdit} />
          <Route exact path='/invoice/:bookId' component={Invoice} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
