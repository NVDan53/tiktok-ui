import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css'; // optional
import images from '~/assets/images';
import Button from '~/components/Button';
import { Inbox, Message, Upload } from '~/components/Icons';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '~/components/Search';
import configRoutes from '~/config/configRoutes';
import styles from './Header.module.scss';



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
    const ref = React.createRef();

    const currentUser = true;

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
                <div className={cx('logo')}>

                    <Link className={cx('logo-link')} to={configRoutes.home}><img src={images.logo} alt="TikTok" /></Link>

                </div>

                {/* Search */}
                <Search />


                <div className={cx('actions')}>

                    {
                        currentUser ? (
                            <>
                                <Tippy delay={[0, 50]} content={<span>Upload video</span>}>
                                    <button className={cx('action-btn')}>
                                        <Upload />
                                    </button>
                                </Tippy>

                                <Tippy delay={[0, 50]} content={<span>Message</span>}>
                                    <button className={cx('action-btn')}>
                                        <Message width="2.6rem" height='2.6rem' />
                                    </button>
                                </Tippy>


                                <Tippy delay={[0, 50]} content={<span>Inbox</span>}>
                                    <button className={cx('action-btn')}>
                                        <Inbox />
                                        <span className={cx('badge')}>12</span>
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


                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange} hideOnClick='false'>
                        {
                            currentUser ? (
                                <Image ref={ref}
                                    src={"ttps://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1676623727098885~c5_720x720.jpeg?x-expires=1652713200&x-signature=dvaAJDMT7PDK3i6CHwaA3DmNXbM%3D"}
                                    className={cx('user-avatar')}
                                    alt="Avatar"
                                    fallBack="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
                                />
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