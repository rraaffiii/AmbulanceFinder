import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import BookingRequest from './containers/BookingRequest'
import BookingSingle from './containers/BookingSingle'
import Checkout from './containers/Checkout'
import Search from './containers/Search'
import Vehicles from './containers/Vehicles'
import VehicleAdd from './containers/VehicleAdd'
import ApproveDriver from './containers/ApproveDriver'
import Stats from './containers/Stats'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/booking-request' component={BookingRequest} />
          <Route path='/booking/:id' children={<BookingSingle />} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/search' component={Search} />
          <Route path='/vehicles' component={Vehicles} />
          <Route path='/vehicle-add' component={VehicleAdd} />
          <Route path='/approve-driver' component={ApproveDriver} />
          <Route path='/stats' component={Stats} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
