import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

const Button = ({ children, to, href, primary = false, secondary = false, outline = false, text = false, leftIcon = false, rightIcon = false,
    rounded = false, disabled = false, small = false, large = false, customClass, handleBtn, ...passProps }) => {

    const handleOnClick = () => {
        return handleBtn
    }

    const _props = {
        onClick: handleOnClick(),
        ...passProps
    }

    let Comp = "button";

    if (to) {
        Comp = Link
        _props.to = to
    }

    if (href) {
        Comp = "a"
        _props.href = href
    }

    if (disabled) {
        Object.keys(_props).forEach(propKey => {
            if (propKey.startsWith('on') && typeof _props[propKey] === 'function') {
                delete _props[propKey]
            }
        })
    }

    const classes = cx('wrapper', {
        [customClass]: customClass,
        primary,
        secondary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large
    })

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp >
    )
}

export default Button