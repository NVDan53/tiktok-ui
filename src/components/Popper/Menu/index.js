import React from 'react'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from "~/components/Popper"
import MenuItem from './MenuItem';
import styles from './Menu.module.scss'
import Header from './Header';

let cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {

    const renderItems = () => {
        return items.map(it => <MenuItem key={it.id} data={it} />)
    }

    return (
        <Tippy
            interactive
            visible
            delay={[0, 600]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <Header title='Language' />
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    )
}

export default Menu