import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiListItemText-primary': {
            color: theme.palette.primary.main,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 'auto',
        },
    },
    avatar: {
        marginLeft: 2,
        maxHeight: 24,
    },
    text: {
        margin: 0,
    }
}));

export default useStyles;