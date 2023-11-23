import { useEffect, useState } from "react";

/**
 * This is a React hook that sets up state variables for tracking whether a user is typing, whether a
 * key is pressed, and a countdown timer.
 */
const useTyping = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [countdown, setCountdown] = useState(5);

/**
 * The function sets certain states to initiate a typing countdown.
 */
  const startTyping = () => {
    setIsKeyPressed(true);
    setCountdown(5);
    setIsTyping(true);
  };

/**
 * The function `stopTyping` sets the state of `isKeyPressed` to `false`.
 */
  const stopTyping = () => {
    setIsKeyPressed(false);
  };

/**
 * The function cancels a typing countdown.
 */
  const cancelTyping = () => {
    setCountdown(0);
  };

/* This `useEffect` hook is setting up an interval that decrements the `countdown` state variable by 1
every second, as long as `isKeyPressed` is false. If `isKeyPressed` becomes true or `countdown`
reaches 0, the interval is cleared. If `countdown` reaches 0, the `isTyping` state variable is set
to false. This hook is essentially setting up a countdown timer for when a user stops typing. */

  useEffect(() => {
    let interval;
    if (!isKeyPressed) {
      interval = setInterval(() => {
        setCountdown((c) => c - 1);
      }, 1000);
    } else if (isKeyPressed || countdown === 0) {
      clearInterval(interval);
    }

    if (countdown === 0) {
      setIsTyping(false);
    }

    return () => clearInterval(interval);
  }, [isKeyPressed, countdown]);

  return { isTyping, startTyping, stopTyping, cancelTyping };
};

export default useTyping;
