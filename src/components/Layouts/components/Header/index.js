import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

let cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}></div>
    )
}

export default Header