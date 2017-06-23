import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import './style.css';

const I = (props) => {
    const { className, type, size = 12, style = {}, ...prop } = props;
    const newStyle = size ? Object.assign(style, {
        fontSize: `${size}px`
    }) : style;
    
    return (
        <span
            {...prop}
            style={newStyle}
            className={classnames(`icon-${type}`, className)}
        ></span>
    )
}

I.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(PropTypes.string, PropTypes.number),
    style: PropTypes.objectOf(PropTypes.any),
}

export default I;