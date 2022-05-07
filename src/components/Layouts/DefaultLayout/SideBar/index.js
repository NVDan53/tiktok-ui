import React from 'react'
import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'

let cx = classNames.bind(styles);

const SideBar = () => {
    return (
        <div className={cx('wrapper')}>SideBar</div>
    )
}

export default SideBar