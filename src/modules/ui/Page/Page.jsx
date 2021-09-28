import * as React from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import classnames from 'classnames';

import AppBar from '../AppBar';


const useStyles = makeStyles(unusedTheme => ({
    root: {},
    bodyContent: {},
}));
  
const Page = ({
    className,
    children,
    ...props
}) => {
    const classes = useStyles();
    return (
        <Container
            {...props}
            className={classnames(className, classes.root)}
        >
            <Grid
                container
                direction="column"
                wrap="nowrap"
                alignContent="flex-start"
                className={classes.wrapper}
            >
                <AppBar />
                <Grid item className={classes.bodyContent}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
};

export default Page;