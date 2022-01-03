import React from 'react';
import './App.css';
import Navbar from './components/nav/nav.component';
import PlaneImg from '../src/assets/newbuild/planes/plane 1.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Footer from './pages/footer/footer.component';
import Newbuild from './pages/newbuilds/newbuilds.component';
import Apartment from './pages/apartment/apartment.component';
import Build from './pages/build/build.component';
import NewBuildDetails from './pages/newbuild-details/newbuild-details.component';
function App() {
  return (
    <div>
      {' '}
      <BrowserRouter>
        <Navbar></Navbar>{' '}
        {/* <Header currentUser={this.state.currentUser} /> */}
        {/* <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInAndSignUpPage} />

      </Switch> */}{' '}
        <Route exact path="/" component={Header}></Route>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/newbuild" component={Newbuild}></Route>
          <Route exact path="/build" component={Build}></Route>
          <Route exact path="/newbuild/details">
            {' '}
            <NewBuildDetails
              img={PlaneImg}
              rooms="3"
              meters="71,8"
              kitchemMeters="20,2"
              title=" Parus"
              time="23 января 2021 г"
              metersForLive="51,6"
              floors="9"
              date="4 квартал 2024 г."
              price="570 815 820"
              priceForMeter="20 471 800"
              info={[
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '740 815 820',
                  priceForMeter: '18 611 800',
                },
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '740 815 820',
                  priceForMeter: '18 611 800',
                },
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '740 815 820',
                  priceForMeter: '18 611 800',
                },
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '740 815 820',
                  priceForMeter: '18 611 800',
                },
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '740 815 820',
                  priceForMeter: '18 611 800',
                },
                {
                  date: '1 кв. 2022г.Корпус B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '740 815 820',
                  priceForMeter: '18 611 800',
                },
              ]}
            ></NewBuildDetails>
          </Route>
          <Route exact path="/apartment" component={Apartment}></Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
