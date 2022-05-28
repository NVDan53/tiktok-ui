import React, { useEffect, useRef, useState } from 'react'
import TippyHeadLess from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as requestAPI from "~/utils/request"
import { search } from '~/services/searchService';

import { useDebounce } from '~/hooks';


const cx = classNames.bind(styles)

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false)

    const inputRef = useRef();

    const debouceValue = useDebounce(searchValue.trim(), 500)

    useEffect(() => {
        if (!debouceValue.trim()) {
            setSearchResult([])
            return
        };

        setLoading(true);

        const fetchAPI = async () => {

            const response = await search('users/search', encodeURIComponent(debouceValue))

            setSearchResult(response.data)
            setLoading(false)
        }

        fetchAPI();

    }, [debouceValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([])
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleOnChange = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(" ")) return;

        setSearchValue(searchValue);

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
                <input className={cx('search-input')} ref={inputRef} placeholder='Search accounts and videos' spellCheck={false} value={searchValue}
                    onChange={handleOnChange}
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

                <button className={cx('search-button')} onMouseDown={(e) => e.preventDefault()}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadLess>
    )
}

export default Search