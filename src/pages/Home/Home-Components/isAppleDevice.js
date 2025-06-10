// utils/isAppleDevice.ts
export const isAppleDevice = () => {
    if (typeof navigator === 'undefined')
        return false;
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /iPad|iPhone|iPod|Macintosh/.test(userAgent) && !('MSStream' in window);
};
