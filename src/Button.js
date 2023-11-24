import React from 'react'

function Button({
    children,
    primary,
    secondary,
    success,
    info,
    warning,
    danger,
    outline,
    rounded
}) {
    return (
        <>
            <button className='text-blue-500'>{children}</button>
        </>

    );
}

Button.propTypes = {

    checkVariationValue: ({ primary, secondary, success, info, warning, danger }) => {

        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) +
            Number(!!info) + Number(!!warning) + Number(!!danger);

        if (count > 1)
            return new Error('Only one of primary, secondary, success, info, warning, danger can be true.');
    }
}

export default Button