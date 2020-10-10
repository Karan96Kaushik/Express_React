import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

var seaNgrass = {
	"Tea Green": "#c9e4ca",
	"Eton Blue": "#87bba2",
	"Steel Teal": "#55828b",
	"Deep Space Sparkle": "#3b6064",
	"Charcoal": "#364958",
	"CharcoalDark": "#172a3a",
}

var greyScale = {
	"White": "#ffffff",
	"Cultured": "#f8f9fa",
	"Cultured 2": "#e9ecef",
	"Gainsboro": "#dee2e6",
	"Light Gray": "#ced4da",
	"Cadet Blue Crayola": "#adb5bd",
	"Slate Gray": "#6c757d",
	"Davys Grey": "#495057",
	"Gunmetal": "#343a40",
	"Charleston Green": "#212529"
}

var accents = {
	"Flickr Pink": "#f72585",
	"Purple": "#7209b7",
	"Trypan Blue": "#3a0ca3",
	"Ultramarine Blue": "#4361ee",
	"Vivid Sky Blue": "#4cc9f0"
}

const lightTheme = createMuiTheme({
	palette: {
		type: 'light',
		primary: {
			main: accents["Ultramarine Blue"],
			light: greyScale["Gainsboro"],
			// default: red[100]
		},
		secondary: {
			main: greyScale["Davys Grey"],
			// default: red[100]
		},
		background: {
			// default: "#364958",
			primary: {
				light: greyScale["White"],
				main: greyScale["Cultured"],
				dark: seaNgrass["Charcoal"]
			},
			secondary: {
				main: greyScale["White"],
				dark: seaNgrass["Charcoal"]
			}// contrast: grey[500],
		}
	},
	typography: {
		useNextVariants: true,
	},
	props: {
		MuiButtonBase: {
			disableRipple: false, // No more ripple
		},
	},
	layout: {
		contentMaxWidth: 1112,
	}
});

const darkTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: seaNgrass["Tea Green"],
			light: seaNgrass["Tea Green"],
			// default: red[100]
		},
		secondary: {
			main: seaNgrass["Eton Blue"],
			// default: red[100]
		},
		background: {
			// default: "#364958",
			primary: {
				main: "#262626",
				dark: seaNgrass["Deep Space Sparkle"],
				// dark: greyScale["Gunmetal"],
			},
			secondary: {
				main: seaNgrass["Deep Space Sparkle"],
				dark: seaNgrass["Deep Space Sparkle"],
			}// contrast: grey[500],
		}
	},
	typography: {
		useNextVariants: true,
	},
	props: {
		MuiButtonBase: {
			disableRipple: false, // No more ripple
		},
	},
	layout: {
		contentMaxWidth: 1112,
	}
});

darkTheme.shadows[1] = '0 3px 3px rgba(0,0,0,.08)';
darkTheme.shadows[2] = '0 10px 10px rgba(0,0,0,.08)';
darkTheme.shadows[4] = '0px 2px 40px 0px rgba(0,0,0,0.08)';

lightTheme.shadows[1] = '0 3px 3px rgba(0,0,0,.08)';
lightTheme.shadows[2] = '0 10px 10px rgba(0,0,0,.08)';
lightTheme.shadows[4] = '0px 2px 40px 0px rgba(0,0,0,0.08)';

const ThemeContext = React.createContext(darkTheme);

const ThemeProvider = ({ children, theme = lightTheme }) => (
	<MuiThemeProvider theme={theme}>
		{children}
	</MuiThemeProvider>
);

ThemeProvider.propTypes = {
	children: PropTypes.node,
};

// export default ThemeProvider;
export { ThemeProvider, darkTheme, lightTheme, ThemeContext };
// export ;