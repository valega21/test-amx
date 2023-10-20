import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "pages/home/home";
import ContactPage from "pages/contact/contact";
import PrivacityPage from "pages/privacity/privacity";

function App() {

    return (
        <div className="contentPage">
            <Router>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/contact" exact component={ContactPage}></Route>
                <Route path="/privacity" exact component={PrivacityPage}></Route>
            </Router>
        </div>
    )
}

export default App;
