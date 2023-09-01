import { useLayoutEffect, useState } from "react";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState([0, 0]);

    useLayoutEffect(() => {
        const windowResized = () => {
            return setWindowSize([window.outerWidth, window.outerHeight])
        }
        windowResized();
        window.addEventListener('resize', windowResized);
        return () => window.removeEventListener('resize', windowResized);
    }, [])
    return windowSize
}
