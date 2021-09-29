import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiListItemText-primary': {
            color: `${theme.palette.secondary.main} !important`
        },
        '& .MuiListItemText-secondary': {
            color: `${theme.palette.default.main} !important`,
            fontStyle: 'italic'
        }
    }
}));

export default useStyles;