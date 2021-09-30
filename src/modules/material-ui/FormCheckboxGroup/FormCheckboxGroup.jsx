import * as React from 'react';
import { FormControl, FormGroup, FormLabel, FormControlLabel, Checkbox } from '@material-ui/core';
import classnames from 'classnames';

import useStyles from './styles';

const FormCheckboxGroup = ({
    className,
    items,
    label,
    onChange,
    multiple,
    initial = false,
    ...props
}) => {
    const classes = useStyles();

    const initialState = React.useMemo(
        () => items.reduce(
            (acc, {key}) => ({...acc, [key]: initial}), {}),
        [items]
    )

    const [checked, setChecked] = React.useState(initialState);

    const handleCheck = React.useCallback(
        (e, key) => multiple
            ? setChecked({...checked, [key]: e.target.checked})
            : setChecked({...initialState, [key]: e.target.checked}),
        [multiple, checked, initialState]
    );
    
    return (
        <FormControl
            {...props}
            className={classnames(className, classes.root)}
        >
            <FormLabel
                className={classes.formLabel}
                component="legend"
            >
                {label}
            </FormLabel>
            <FormGroup
                className={classes.formGroup}
            >
                {items.map(({ key, label, ...item }) => (
                    <FormControlLabel
                        className={classes.formControlLabel}
                        key={key}
                        label={label}
                        control={
                            <Checkbox
                                {...item}
                                className={classes.checkbox}
                                checked={checked[key]}
                                onChange={e => {
                                    handleCheck(e, key);
                                    onChange(e, key);
                                }}
                            />
                        }
                    />
                ))}
            </FormGroup>
        </FormControl>
    )
};

export default FormCheckboxGroup;