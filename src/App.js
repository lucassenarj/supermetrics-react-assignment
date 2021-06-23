import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { store, persistor } from "./store";

function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/supermetrics-react-assignment/" forceRefresh={true}>
          <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
