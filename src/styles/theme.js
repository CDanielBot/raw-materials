import { createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const RMTheme = createMuiTheme({
    palette: {
        primary: teal,
        secondary: red,
        // error: red,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2
    },
    typography: {
        fontWeightMedium: 400
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 0
            },
        },
        MuiSvgIcon: {
            root: {
                color: grey[500],
            },
        },
        MuiIconButton: {
            root: {
                width: 36,
                height: 36,
            },
        },
    }
});