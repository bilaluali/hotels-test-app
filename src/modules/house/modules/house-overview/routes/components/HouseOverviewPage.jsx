import * as React from 'react';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import Page from '../../../../../ui/Page';

const useStyles = makeStyles(unusedTheme => ({
    root: {
        '& .MuiGrid-root': {
            alignSelf: 'center',
            paddingTop: 36
        }
    }
}));
  
const HouseOverviewPage = ({
    className,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Page
            {...props}
            className={classnames(className, classes.root)}
        >
            <img src="https://media.giphy.com/media/fnDY3C9MKukcER71r7/giphy.gif" /> 
        </Page>
    )
};

export default HouseOverviewPage;