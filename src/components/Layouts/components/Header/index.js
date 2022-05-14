import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import TippyHeadLess from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faMagnifyingGlass, faSpinner, faEarthAsia, faCircleQuestion, faKeyboard, faCloudUpload, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images'
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

let cx = classNames.bind(styles);


const MENU_ITEMS = [
    {
        id: 1,
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'Language1',
                        data: [
                            {
                                type: 'language1',
                                code: 'en',
                                title: 'English1'
                            },
                            {
                                type: 'language1',
                                code: 'vi',
                                title: 'Viet Nam1',
                            }
                        ]
                    }
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Viet Nam',
                }
            ]
        }
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: '/feedback'
    }, {
        id: 3,
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts"
    },
]

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
]


const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    const currentUser = true;


    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
        switch (menuItem.type) {
            case 'language':
                window.alert('Language')
                break;
            case 'language1':
                window.alert('Language1')
                break;
            default:
                break;
        }
    }


    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}><img src={images.logo} alt="TikTok" /></div>

                <TippyHeadLess
                    visible={searchResult.length > 0}
                    interactive
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and videos' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                        <button className={cx('search-button')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadLess>

                <div className={cx('actions')}>

                    {
                        currentUser ? (
                            <>
                                <Tippy delay={[0, 200]} content={<span>Upload video</span>}>
                                    <button className={cx('action-btn')}>
                                        <FontAwesomeIcon icon={faCloudUpload} />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Login</Button>


                            </>
                        )
                    }

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {
                            currentUser ? (
                                <img src={"https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1676623727098885~c5_720x720.jpeg?x-expires=1652713200&x-signature=dvaAJDMT7PDK3i6CHwaA3DmNXbM%3D"} className={cx('user-avatar')} alt="Avatar" />
                            ) : (

                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }

                    </Menu>


                </div>
            </div >
        </header >
    )
}

export default Header