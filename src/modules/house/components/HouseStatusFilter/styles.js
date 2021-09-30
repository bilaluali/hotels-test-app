import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormGroup-root': {
            display: 'inline'
        },
        '& .MuiFormControlLabel-label': {
            ...theme.typography.body2,
        },
        '& .MuiFormLabel-root': {
            ...theme.typography.subtitle1,
        },
        '& .MuiCheckbox-root': {
            paddingRight: 4,
        }
    },
}));

export default useStyles;