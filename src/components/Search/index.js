import React, { useEffect, useRef, useState } from 'react'
import TippyHeadLess from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false)

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        };

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(response => response.json())
            .then(data => {
                setSearchResult(data.data)
                setLoading(false)
            });

    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <TippyHeadLess
            visible={showResult && searchResult.length > 0}
            interactive
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {
                            searchResult.map(data =>
                                <AccountItem key={data.id} data={data} />
                            )
                        }

                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input ref={inputRef} placeholder='Search accounts and videos' spellCheck={false} value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {
                    !!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )
                }


                {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadLess>
    )
}

export default Search