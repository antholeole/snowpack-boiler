/* eslint-disable */
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
    'node_modules/@blueprintjs/core/lib': '/styles'
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass'
  ],
  devOptions: {
    output: 'stream',
  },
  buildOptions: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
