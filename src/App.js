import React from 'react';
import './App.css';
import Navbar from './components/nav/nav.component';
import AboutUsImg from './assets/about-us/about-uspng.png';
import PlaneImg from '../src/assets/newbuild/planes/plane 1.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Footer from './pages/footer/footer.component';
import Newbuild from './pages/newbuilds/newbuilds.component';
import Apartment from './pages/apartment/apartment.component';
import Build from './pages/build/build.component';
import NewBuildDetails from './pages/newbuild-details/newbuild-details.component';
import ScrollToTop from './components/scrolltotop.js';
import AboutUs from './pages/about-us/about-us.component';
import Blog from './pages/blog/blog.component';
import Profile from './pages/profile/profile.component';
import Favorites from './pages/favorites/favorites.component';
import MapFilter from './pages/map-filter/map-filter.coponent';
import Post from './pages/post/post.component';
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
        <ScrollToTop></ScrollToTop>
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
                  date: '1 кв. 2022г.',
                  dateFrame: 'B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
                {
                  date: '1 кв. 2022г.',
                  dateFrame: 'B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
                {
                  date: '1 кв. 2022г.',
                  dateFrame: 'B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
                {
                  date: '1 кв. 2022г.',
                  dateFrame: 'B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
                {
                  date: '1 кв. 2022г.',
                  dateFrame: 'B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
                {
                  date: '1 кв. 2022г.',
                  dateFrame: 'B',
                  floor: '2 этаж из 12',
                  meters: '44,9 м² общая',
                  package: 'Чистовая',
                  price: '570 815 820',
                  priceForMeter: '20 471 800',
                },
              ]}
            ></NewBuildDetails>
          </Route>
          <Route exact path="/apartment" component={Apartment}></Route>
          <Route exact path="/favorites" component={Favorites}></Route>
          <Route exact path="/profile">
            <Profile></Profile>{' '}
          </Route>
          <Route exact path="/about-us">
            {' '}
            <AboutUs img={AboutUsImg}></AboutUs>{' '}
          </Route>
          <Route path="/blog/acticle">
            {' '}
            <Blog></Blog>
          </Route>
          <Route exact path="/map-filter">
            {' '}
            <MapFilter></MapFilter>
          </Route>
          <Route exact path="/post">
            {' '}
            <Post></Post>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
