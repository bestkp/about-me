import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import createHistory from "history/createHashHistory";
import { ConnectedRouter } from "react-router-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import store from "./store/store";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./App";
// import HomePage from "./containers/HomePage/HomePage";
// import ResultPage from "./containers/ResultPage/ResultPage";
import Test from "./containers/Test/Test";

const history = createHistory();

const NotFound = () => {
  return <p>the page you are visiting is not found.</p>;
};
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      {/* ConnectedRouter will use the store from Provider automatically */}
      <ConnectedRouter history={history}>
        <div>
          <App></App>
          <Switch>
            <Route exact path="/" component={Test} />
            {/* <Route exact path="/result" component={ResultPage} /> */}
            {/* <Route exact path="/test" component={Test} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
