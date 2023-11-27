import React from 'react';
import classNames from 'classnames';

import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    const classes = twMerge(
        classNames(rest.classNames, `flex items-center px-3 py-1.5 border`, {
            'border-blue-700 bg-blue-500 text-white': primary,
            'border-gray-700 bg-gray-500 text-white':secondary,
            'border-green-700 bg-green-500 text-white': success,
            'border-yellow-700 bg-yellow-500 text-white': warning,
            'border-red-700 bg-red-500 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-900': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-500': outline && warning,
            'text-red-500': outline && danger,
        })
    );
    
    return (
        <>
            <button className={classes} {...rest}>{children}</button>
        </>

    );
}

Button.propTypes = {

    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {

        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) +
             + Number(!!warning) + Number(!!danger);

        if (count > 1)
            return new Error('Only one of primary, secondary, success, warning, danger can be true.');
    }
}

export default Button