import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";
import Layout from "./Layout"
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
