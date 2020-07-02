module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!gsap/.*)'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/fileMock.js',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/_docs/**/*',
    '!src/gsap-bonus/**/*',
    '!src/**/*.stories.js',
    '!src/**/index.ts',
    '!src/**/*.stories.tsx',
  ],
}
