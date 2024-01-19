import './App.css';
import Header from "./compoent/layout/Header/Header.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
import WebFont from "webfontloader"
import React from 'react';
import Footer from "./compoent/layout/Footer/Footer.js"
import Home from "./compoent/Home/Home.js"
import ProductDetails from "./compoent/Product/ProductDetails.js"

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    })
  }, [])

  return (
    <Router>
      <Header />
      <Route extact path="/" component={Home} />
      <Route extact path="/product/:id" component={ProductDetails} />
      <Footer />
    </Router>
  );
}

export default App;
