import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout.js"
import RegionPage from "../pages/RegionPage"
import Options from "./Options"
import "../pages/styles/Global.css"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/regions" component={Options} />
          <Route exact path="/regions/:id" component={RegionPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
