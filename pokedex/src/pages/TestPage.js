import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header"
import Options from "../components/Options"
import PokemonList from "../components/PokemonList"

import "./styles/Global.css"

function TestPage() {
  return (
    // <BrowserRouter>
    //   <Layout>
    //     <Switch>
    //       <Route exact path="/badges" component={Badges} />
    //       <Route exact path="/badges/new" component={BadgeNew} />
    //       <Route exact path="/badges/:badgeID/edit" component={BadgeEdit} />
    //       <Route exact path="/" component={Home} />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </Layout>
    // </BrowserRouter>
    <React.Fragment >
      <Header />
      <Options />
      <PokemonList />
    </React.Fragment>
  );
}

export default TestPage;