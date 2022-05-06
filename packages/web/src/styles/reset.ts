import { globalCss } from '../stitches.config';

export const installResetStyle = globalCss({
  '#app': {
    height: '100vh',
    overflow: 'scroll',
    scrollSnapType: 'y mandatory',
    scrollSnapStop: 'always',
  },
});
