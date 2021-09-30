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

    console.log('CHECKED', checked)

    return (
        <FormControl
            {...props}
            className={classnames(className, classes.root)}
            component="fieldset"
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
                {items.map(({ key, color, size, ...item }) => (
                    <FormControlLabel
                        {...item}
                        className={classes.formControlLabel}
                        key={key}
                        control={
                            <Checkbox
                                className={classes.checkbox}
                                color={color || 'primary'}
                                size={size}
                                checked={checked[key]}
                                onChange={e => {
                                    handleCheck(e, key);
                                    onChange(e);
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