import React from 'react'
import classNames from 'classnames/bind';
import Button from '~/components/Button'

import styles from './Menu.module.scss'


let cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    return <Button customClass={cx('menu-item')} leftIcon={data.icon} to={data.to} handleBtn={onClick}>{data.title}</Button>
}

export default MenuItem