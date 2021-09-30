import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiListItemText-primary': {
            color: `${theme.palette.success.main} !important`
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 'auto',
        },
        padding: [[4, 0, 4, 0]]
    },
    avatar: {
        marginRight: 5,
        color: theme.palette.success.main
    },
    text: {
        margin: 0,
    }
}));

export default useStyles;