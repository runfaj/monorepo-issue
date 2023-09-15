/* Note - this needs to be a js instead of ts file in order for
  vite to recognize it
*/

/** @type {import('postcss-load-config').Config} */

import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const config = {
  plugins: [
    autoprefixer,
    cssnano,
  ]
}

export default config;
