// Libs
import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

// Styles
import './App.css';

// Pages
import {
  MainPage,
  ProductPage,
  AccountDetailSettings,
  BusketPage,
  BlogPage,
  ShopsPage,
  PlantCarePage
} from './pages/imports';

function App() {
  return(
    <BrowserRouter basename={'/GreenShop-site/'}>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route path="/product/:id" component={ProductPage}/>
        <Route path="/basket" component={BusketPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/shops" component={ShopsPage} />
        <Route path="/plantcare" component={PlantCarePage} />
        <Route path="/user/settings/accountdetail" component={AccountDetailSettings} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;