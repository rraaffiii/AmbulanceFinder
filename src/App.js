import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import Search from './containers/Search'
import SearchResult from './containers/SearchResult'
// client
import BookingRecent from './containers/Client/BookingRecent'
import BookingSingleClient from './containers/Client/BookingSingle'
import ProfileClient from './containers/Client/Profile'
import ProfileEditClient from './containers/Client/ProfileEdit'
import Checkout from './containers/Client/Checkout'
import Invoice from './containers/Client/Invoice'
// driver
import BookingRequest from './containers/Driver/BookingRequest'
import BookingSingleDriver from './containers/Driver/BookingSingle'
import VehicleAdd from './containers/Driver/VehicleAdd'
import ProfileDriver from './containers/Driver/Profile'
import ProfileEditDriver from './containers/Driver/ProfileEdit'
// admin
import ApproveDriver from './containers/Admin/ApproveDriver'
import Stats from './containers/Admin/Stats'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/search/result' component={SearchResult} />
          {/* client */}
          <Route exact path='/client/booking' component={BookingRecent} />
          <Route
            exact
            path='/client/booking/:id'
            children={<BookingSingleClient />}
          />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/invoice/:bookId' component={Invoice} />
          <Route exact path='/client/profile/:id' component={ProfileClient} />
          <Route
            exact
            path='/client/profile/:id/edit'
            component={ProfileEditClient}
          />
          {/* driver */}
          <Route exact path='/driver/booking' component={BookingRequest} />
          <Route
            exact
            path='/driver/booking/:id'
            children={<BookingSingleDriver />}
          />
          <Route exact path='/vehicle-add' component={VehicleAdd} />
          <Route exact path='/driver/profile/:id' component={ProfileDriver} />
          <Route
            exact
            path='/driver/profile/:id/edit'
            component={ProfileEditDriver}
          />
          {/* admin */}
          <Route exact path='/approve-driver' component={ApproveDriver} />
          <Route exact path='/stats' component={Stats} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
