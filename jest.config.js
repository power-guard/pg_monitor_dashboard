module.exports = {
  preset: 'ts-jest',
  modulePaths: ['./src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  setupFilesAfterEnv: ['./src/testsSetup.ts'],
  transform: { '\\.tsx?$': 'ts-jest' },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};
