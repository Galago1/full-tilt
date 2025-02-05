'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var commonjs = require('@rollup/plugin-commonjs');
var resolve = require('@rollup/plugin-node-resolve');
var external = require('rollup-plugin-peer-deps-external');
var postcss = require('rollup-plugin-postcss');
var rollupPluginTerser = require('rollup-plugin-terser');
var typescript = require('rollup-plugin-typescript2');

const pkg = require('./package.json');

// Custom plugin to exclude story files
const excludeStoriesPlugin = () => ({
  name: 'exclude-stories',
  resolveId(source, importer) {
    if (source.includes('.stories.') || importer?.includes('.stories.')) {
      return { id: 'empty-module', external: true };
    }
    return null;
  },
  load(id) {
    if (id === 'empty-module') {
      return 'export default {};';
    }
    return null;
  }
});

var rollup_config = [
  {
    external: [
      'react',
      'react-dom',
      'react-is',
      'formik',
      'formik-mui',
      '@stripe/react-stripe-js',
      '@stripe/stripe-js',
      '@emotion/react',
      '@emotion/styled',
      '@mui/base',
      '@mui/icons-material',
      '@mui/lab',
      '@mui/material',
      '@mui/private-theming',
      '@mui/styled-engine',
      '@mui/styles',
      '@mui/system',
      '@mui/types',
      '@mui/utils',
      '@mui/x-data-grid-generator',
      '@mui/x-data-grid-pro',
      '@mui/x-data-grid-premium',
      '@mui/x-date-pickers',
      '@mui/x-date-pickers-pro'
    ],
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
        // name: 'react-ts-lib'
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      excludeStoriesPlugin(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.build.json',
        useTsconfigDeclarationDir: true
      }),
      postcss(),
      rollupPluginTerser.terser()
    ]
  }
];

exports.default = rollup_config;
