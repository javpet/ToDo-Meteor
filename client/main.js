// Libs
import React from "react";
import { Meteor } from "meteor/meteor";
import ReactDOM from "react-dom";

// Components
import App from "../imports/App.js";
import "../imports/AccountsUIConfig.js";

Meteor.startup(() => {
	ReactDOM.render(<App />, document.getElementById("render-target"));
});
