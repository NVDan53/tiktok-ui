import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image'


const cx = classNames.bind(styles);

function AccountItem({ data: { avatar, full_name, nickname, tick, ...rest } }) {

    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={avatar}
                alt={nickname}
                fallBack="https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{full_name}</span>
                    {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{nickname}</span>
            </div>
        </div>
    );
}

export default AccountItem;