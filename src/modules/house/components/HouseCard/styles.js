import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(unusedTheme => ({
    root: {
        boxShadow: '0px 3px 5px 0px rgb(0 0 0 / 10%)',
        '&:hover': {
            border: '1.25px solid #333333',
        }
    },
    cardImage: {
        margin: 0
    },
    cardContent: {
        paddingTop: 5,
    }
}));

export default useStyles;