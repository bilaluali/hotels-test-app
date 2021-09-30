import * as React from 'react';
import classnames from 'classnames';

import FormCheckboxGroup from '../../../material-ui/FormCheckboxGroup/FormCheckboxGroup';
import useStyles from './styles';

const HouseStatusFilter = ({
    className,
    items,
    onChange,
    ...props
}) => {
    const classes = useStyles();
    return (
        <FormCheckboxGroup
            className={classnames(className, classes.root)}
            items={items}
            onChange={onChange}
            label="Status"
            multiple
            initial
        />
    )
};

export default HouseStatusFilter;