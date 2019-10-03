import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout.js"
import RegionPage from "../pages/RegionPage"
import "../pages/styles/Global.css"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/generations/:id" component={RegionPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
