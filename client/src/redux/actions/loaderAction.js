import { DISABLE_LOADER, ENABLE_LOADER } from '../types/loaderTypes';

export const enableLoader = () => ({
  type: ENABLE_LOADER,
});

export const disableLoader = () => ({
  type: DISABLE_LOADER,
});
