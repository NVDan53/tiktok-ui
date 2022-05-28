import React, { useState } from 'react'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from "~/components/Popper"
import MenuItem from './MenuItem';
import styles from './Menu.module.scss'
import Header from './Header';

let cx = classNames.bind(styles);

const Menu = ({ children, items = [], onChange = () => { }, hideOnClick = true }) => {

    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map(it => {
            const isParent = !!it.children;

            return <MenuItem key={it.id} data={it} onClick={() => {
                if (isParent) {
                    setHistory(pre => [...pre, it.children])
                } else {
                    onChange(it)
                }
            }} />
        })
    }

    return (
        <Tippy
            interactive
            delay={[0, 600]}
            offset={[12, 8]}
            placement='bottom-end'
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            setHistory(pre => pre.slice(0, pre.length - 1))
                        }} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => setHistory(pre => pre.slice(0, 1))}
            hideOnClick={false}
        >
            {children}
        </Tippy>
    )
}

export default Menu