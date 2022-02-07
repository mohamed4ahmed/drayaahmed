import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils";
import HomePage from "./containers/homepage";
import Spinner from "./components/Spinner";
import NotFound from "./components/NotFound";
import Information from "./containers/information";



function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={ <Information/> } />
          <Route path="/portfolio" exact element={ <HomePage/> } />
          <Route element={ <NotFound/> } />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
