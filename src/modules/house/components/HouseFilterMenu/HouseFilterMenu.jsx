import * as React from 'react';
import {  Button, Menu, Divider } from '@material-ui/core';
import classnames from 'classnames';

import FormCheckboxGroup from '../../../material-ui/FormCheckboxGroup/FormCheckboxGroup';
import HouseFilterMenuLabel from '../HouseFilterMenuLabel';
import useStyles from './styles';

const HouseFilterMenu = ({
    className,
    items,
    onChange,
    ...props
}) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = React.useCallback(
        e => setAnchorEl(e.currentTarget),
        [anchorEl]
    )
    const handleClose = React.useCallback(
        () => setAnchorEl(null),
        [anchorEl]
    )

    return (
        <div
            {...props}
            className={classnames(className, classes.root)}
        >
            <Button
                className={classes.button}
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <HouseFilterMenuLabel />
            </Button>
            <Menu
                className={classes.menu}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <FormCheckboxGroup
                    className={classes.formCheckboxGroup}
                    items={items}
                    onChange={onChange}
                    label="Status"
                    multiple
                    initial
                />
                <Divider
                    className={classes.divider}
                />
            </Menu>
        </div>
    )
};

export default HouseFilterMenu;