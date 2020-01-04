const env = require('./env');

switch (process.env.JEST_ENV) {
  case 'app':
    module.exports = {
      coveragePathIgnorePatterns: ['/node_modules/', '/tools/'],
      moduleFileExtensions: ['js', 'jsx'],
      moduleNameMapper: {
        '~(.*)': '<rootDir>/src$1',
      },
      setupFilesAfterEnv: ['<rootDir>/tools/setup-app.js'],
      snapshotSerializers: ['jest-emotion'],
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.flow-typed',
        '.*\\.e2e-spec.js$',
      ],
      testURL: `http://${env.HOST_NAME}/`,
      transform: {
        '^.+\\.js$': 'babel-jest',
        '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$':
          '<rootDir>/tools/assets-transform.js',
      },
    };
    break;

  case 'e2e':
    module.exports = {
      setupFilesAfterEnv: ['<rootDir>/tools/setup-e2e.js'],
      testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.flow-typed',
        '.*\\.spec.js$',
      ],
      testURL: `http://${env.HOST_NAME}/`,
      transform: {
        '^.+\\.js$': 'babel-jest',
      },
    };
    break;

  default:
    module.exports = {};
}
