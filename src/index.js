import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import ThemeProvider from './components/Theme';
import { ThemeProvider, darkTheme, lightTheme, ThemeContext } from './components/Theme';
import * as serviceWorker from './serviceWorker';
import { useState } from 'react';
import AppBar from './components/AppBar';

function Main(props) {
  var [theme, setTheme] = useState({ dark: true })
  // const themeMode = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme.dark ? darkTheme : lightTheme}>
        <AppBar />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
