import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
// import ThemeProvider from './components/Theme';
import { ThemeProvider, darkTheme, lightTheme, ThemeContext } from './components/Theme';
import { NavBarContext } from "./myContext"
import * as serviceWorker from './serviceWorker';
import { useState } from 'react';
import AppBar from './components/AppBar';
import NavBar from "./components/NavBar"
import { SocialIcon, WritingIcon, LibraryIcon, OwlIcon, } from './components/social_svg';

function Main(props) {
  var darkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
  darkPreference = true;        // DEV Stage

  var [theme, setTheme] = useState({ dark: darkPreference })
  var [NavOpen, setNavOpen] = useState(false)
  // const themeMode = useContext(ThemeContext);

  var buttons = [
    {
      _text: 'Home',
      _link: '/',
      _onClick: () => { this._openapp('manga') },
      _icon: LibraryIcon
    },
    {
      _text: 'Me',
      _link: '/profile/',
      _onClick: () => { this._openapp('gogo') },
      _icon: OwlIcon
    },
    {
      _text: 'Manga Downloader',
      _link: '/manga',
      _onClick: () => { this._openapp('manga') },
      _icon: SocialIcon
    },
    {
      _text: 'Manga Owl',
      _link: '/mangaowl',
      _onClick: () => { this._openapp('mangaowl') },
      _icon: OwlIcon
    },
    {
      _text: 'Gogo Anime',
      _link: '/gogo',
      _onClick: () => { this._openapp('gogo') },
      _icon: OwlIcon
    },
    {
      _text: 'Editor',
      _link: '/editor',
      _onClick: () => { this._openapp('editor') },
      _icon: WritingIcon
    },
    {
      _text: 'Bookmarks',
      _link: '/bookmarks',
      _onClick: () => { this._openapp('bookmarks') },
      _icon: LibraryIcon
    },
    // {
    // 	_text: 'Fonts App',
    // 	_onClick: () => { this._openapp('fonts') },
    // 	_icon: WritingIcon
    // },
    // {
    // 	_text: 'Ipad Bookmarks',
    // 	_onClick: () => { this._openapp('bookmarksipad') },
    // 	_icon: LibraryIcon
    // }
  ]

  return (
    <NavBarContext.Provider value={{NavOpen,setNavOpen}}>
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme.dark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <NavBar comps={buttons} />
        <AppBar />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
    </NavBarContext.Provider>
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
