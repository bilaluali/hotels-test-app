import * as React from 'react';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

import Page from '../../../../../ui/Page';

const useStyles = makeStyles(unusedTheme => ({
    root: {}
}));
  
const HousesOverviewPage = ({
    className,
    heading,
    contents,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Page
            {...props}
            className={classnames(className, classes.root)}
        >
            {contents}
        </Page>
    )
};

export default HousesOverviewPage;