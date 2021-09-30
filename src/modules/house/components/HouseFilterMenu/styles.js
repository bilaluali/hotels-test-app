import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {},
    menu: {
        '& .MuiMenu-list': {
            padding: 16,
        }
    },
    button: {
        textTransform: 'none',
    },
    formCheckboxGroup: {
        '& .MuiFormControlLabel-root': {
            margin: 0
        },
        '& .MuiFormControlLabel-label': {
            ...theme.typography.body2,
        },
        '& .MuiCheckbox-root': {
            padding: [[4, 4, 4, 8]]
        },
        '& .MuiFormLabel-root': {
            ...theme.typography.subtitle1,
        }
    },
    divider: {
        padding: [[2, 0, 2, 0]]
    }
}));

export default useStyles;