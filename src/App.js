import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageHome from './routes/PageHome';
import PageProjects from './routes/PageProjects';
import PageLogin from './routes/PageLogin';
import PageProfile from './routes/PageProfile';
// import PageSignUp from './routes/PageSignUp';
import PageSignUp from './components/SignUp';
import { useTheme } from '@material-ui/core';
import PageManga from './routes/PageManga';
import PageOwl from './components/mangaowl';
import PageEditor from './components/editor';
import PageBookmarks from './components/bookmark';
import PageD3 from './routes/PageD3';

function App() {

	var theme = useTheme()
	document.body.style.backgroundColor = theme.palette.background.primary.main   // Set the style

	return (
		<Switch>
			<Route path="/" exact component={PageHome} />
			<Route path="/d3" exact component={PageD3} />
			<Route path="/manga" exact component={PageManga} />
			<Route path="/editor" exact component={PageEditor} />
			<Route path="/mangaowl" exact component={PageOwl} />
			<Route path="/bookmarks" exact component={PageBookmarks} />
			<Route path="/project/:projectId/" exact component={PageProjects} />
			<Route path="/login" component={PageLogin} />
			<Route path="/sign-up" component={PageSignUp} />
			<Route path="/profile/" component={PageProfile} />
			{/* <Route path="/profile/" component={PageProfile} /> */}
		</Switch>
	);
	// }
}

export default App;
