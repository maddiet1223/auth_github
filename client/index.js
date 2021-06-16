import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";

import App from "./Components/App";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SingupForm";

//Apollo client doesn't send along cookies whenever we send a req to graphql. If we dont send cookies then the graph ql response doesnt come with a cookie by default so we wont know the currently logged user state if they are logged in or not like how we see in the graphiql
const networkInterface = new createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin",
  },
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="login" component={LoginForm} />
        <Route path="signup" component={SignupForm} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
