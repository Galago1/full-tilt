const { defaults } = require('jest-config');
// jest.config.js
module.exports = {
  globals: {
    'ts-jest': {
      // Tell ts-jest about our typescript config.
      // You can specify a path to your tsconfig.json file,
      // but since we're compiling specifically for node here,
      // this works too.
      tsConfig: {
        target: 'es2019'
      }
    }
  },

  transformIgnorePatterns: ['node_modules/(?!(react-dnd)/)'],
  testEnvironment: 'jest-environment-jsdom',
  // Transforms tell jest how to process our non-javascript files.
  // Here we're using babel for .js and .jsx files, and ts-jest for
  // .ts and .tsx files.  You *can* just use babel-jest for both, if
  // you already have babel set up to compile typescript files.
  transform: {
    // '^.+\\.tsx?$': 'ts-jest'
    // '^.+\\.(ts|tsx|js|html|svg)$': 'ts-jest'
    // If you're using babel for both:
    // "^.+\\.[jt]sx?$": "babel-jest",
    // Resolve .jpg and similar files to __mocks__/file-mock.js
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
    // '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.(ts|tsx|js|jsx|html)$': 'babel-jest'
  },
  // In webpack projects, we often allow importing things like css files or jpg
  // files, and let a webpack loader plugin take care of loading these resources.
  // In a unit test, though, we're running in node.js which doesn't know how
  // to import these, so this tells jest what to do for these.
  moduleNameMapper: {
    // Correctly handle fontsource imports
    '^@fontsource/inter/(.*)\\.css$': 'identity-obj-proxy',
    // Handle other CSS and similar file imports
    '\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    // SVG mock
    '\\.svg': '<rootDir>/__mocks__/svg.js'
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],

  // // Tells Jest what folders to ignore for tests
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, 'dist'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'src/**/*.tsx',
    '!src/**/*.d.ts',
    `!src/**/*.stories.tsx`,
    '!src/index.tsx'
  ],
  roots: ['<rootDir>/'],
  modulePaths: ['<rootDir>/'],

  // testURL: `http://localhost`,
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.ts',
    '<rootDir>/__mocks__/matchMediaMock.ts'
  ],
  // coverageDirectory: 'coverage/web',
  // resetMocks: true,
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  }
};
