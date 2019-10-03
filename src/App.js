import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "./Helpers/history";
import Index from "./Containers/Index";

function App() {
	const thelist = [
		{ id: 1, name: "Fabian1" },
		{ id: 2, name: "Fabian2" },
		{ id: 3, name: "Fabian3" }
	];

	return (
		<Router history={history}>
			<Switch>
				<Route path="/" render={() => <Index thelist={thelist} />} />
			</Switch>
		</Router>
	);
}

export default App;
