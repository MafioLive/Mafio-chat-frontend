import { useRef, useState, useEffect } from 'react';

/**
 * This is a custom hook in JavaScript that detects clicks outside of a specified element and updates a
 * state accordingly.
 * @param initialValue - The initial value for the state variable `showEmoji`, which determines whether
 * or not to show the emoji.
 * @returns An object containing the state variable `showEmoji`, the function `setShowEmoji`, and a
 * `ref` object.
 */
const useOutsideClick = (initialValue) => {
    const ref = useRef(null);
    const [showEmoji, setShowEmoji] = useState(initialValue);

    const handleClickOutside = (event) => {
        console.log(ref);
        if (ref.current && !ref.current.contains(event.target)) setShowEmoji(false);
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [ref]);

    return { showEmoji, setShowEmoji, ref }
}

export default useOutsideClick;