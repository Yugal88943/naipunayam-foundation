// utils/isAppleDevice.ts
export const isAppleDevice = (): boolean => {
    if (typeof navigator === 'undefined') return false;
    return /Mac|iPhone|iPod|iPad/.test(navigator.platform);
  };
  