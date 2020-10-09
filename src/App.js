import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHome from './routes/PageHome';
import PageProjects from './routes/PageProjects';
import PageVersion from './routes/PageVersion';
import PageLogin from './routes/PageLogin';
import PageProfile from './routes/PageProfile';
import PageSignUp from './routes/PageSignUp';
import { useTheme } from '@material-ui/core';
import PageManga from './routes/PageManga';

function App() {

	var theme = useTheme()
	document.body.style.backgroundColor = theme.palette.background.primary.main   // Set the style

	return (
		<Switch>
			<Route path="/" exact component={PageHome} />
			<Route path="/manga" exact component={PageManga} />
			<Route path="/project/:projectId/" exact component={PageProjects} />
			<Route path="/project/:projectId/v/:versionId/" component={PageVersion} />
			<Route path="/login" component={PageLogin} />
			<Route path="/sign-up" component={PageSignUp} />
			<Route path="/profile/:username" component={PageProfile} />
		</Switch>
	);
	// }
}

export default App;
