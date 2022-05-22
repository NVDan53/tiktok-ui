import { useEffect, useRef, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebouceValue] = useState(value);
    const inputValue = useRef();

    useEffect(() => {
        inputValue.current = setTimeout(() => { setDebouceValue(value) }, delay);

        return () => clearTimeout(inputValue.current);
    }, [value])

    return debounceValue;
}

export default useDebounce