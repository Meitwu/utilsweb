import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/index.umd.js',
    format: 'umd',
    name: 'AsunsUtils',
    sourcemap: true
  },
  plugins: [resolve(), commonjs()]
};
