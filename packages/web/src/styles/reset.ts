import { globalCss } from '../stitches.config';

export const installResetStyle = globalCss({
  'html, body': {
    padding: 0,
    margin: 0,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '#app': {
    height: '100vh',
    overflow: 'scroll',
    scrollSnapType: 'y mandatory',
    scrollSnapStop: 'always',
  },
});
