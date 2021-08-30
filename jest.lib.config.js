module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts'
  ],
  roots: ['<rootDir>/projects'],
}
