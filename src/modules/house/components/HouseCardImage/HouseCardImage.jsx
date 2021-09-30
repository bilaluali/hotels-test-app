import * as React from 'react';
import classnames from 'classnames';

import HouseStatusChip from '../HouseStatusChip';
import HouseCardImageLoader from '../HouseCardImageLoader';
import useStyles from './styles';

const DEFAULT_IMG = `${process.env.PUBLIC_URL}/placeholder.png`;
  
const HouseCardImage = ({
    className,
    status,
    image,
    ...props
}) => {
    const classes = useStyles();

    const [loading, setLoading] = React.useState(true);

    // TRICKY SOLUTION: Need to be improved
    const handleRendered = React.useCallback(
        () => setLoading(false),
        [loading]
    );
    const handleRender = React.useCallback(
        () => requestAnimationFrame(handleRendered),
        [handleRendered]
    );
    const handleLoad = React.useCallback(
        () => requestAnimationFrame(handleRender),
        [handleRender]
    );

    return (
        <figure
            {...props}
            className={classnames(className, classes.root)}
        >
            {!!loading && 
                <HouseCardImageLoader />
            }
            <img
                className={classes.img}
                alt="House Image"
                src={image || DEFAULT_IMG}
                onLoad={() => {
                    handleLoad();
                }}
            />
            <HouseStatusChip
                className={classes.chip}
                status={status}
            />
        </figure>
    )
};

export default HouseCardImage;