import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default [
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
      resolve(),
      commonjs(),
      // resolve({ dedupe: ['react', 'react-dom'] }),

      typescript({
        useTsconfigDeclarationDir: true,
        exclude: [
          'node_modules',
          'dist',
          'src/**/*.stories.tsx',
          'src/**/*.test.tsx'
        ]
      }),
      postcss(),
      terser()
    ]
  }
];
