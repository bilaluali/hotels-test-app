import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        boxShadow: '0px 3px 5px 0px rgb(0 0 0 / 7%) !important',
        '&:hover': {
            border: '1.25px solid #333333',
        },
        '& .MuiCardContent-root': {
            padding: [[16, 16, 8, 16]],
        },
        '& .MuiCardActions-root': {
            padding: [[0, 16, 16, 16]]
        }
    },
    cardImage: {
        margin: 0
    },
    cardContent: {},
    cardActions: {},
    houseCardInfo: {
        margin: '0px !important'
    }
}));

export default useStyles;