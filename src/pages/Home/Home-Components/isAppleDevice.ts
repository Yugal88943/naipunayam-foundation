// utils/isAppleDevice.ts
export const isAppleDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;

  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

  return /iPad|iPhone|iPod|Macintosh/.test(userAgent) && !('MSStream' in window);
};
