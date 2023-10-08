/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    // All imported modules in your tests should be mocked automatically

    // automock: false,

    // Stop running tests after `n` failures
    // bail: 0,

    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\User\\AppData\\Local\\Temp\\jest",

    // Automatically clear mock calls, instances and results before every test
    clearMocks: true,
    // The test environment that will be used for testing
    testEnvironment: 'jsdom',
    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    moduleDirectories: [
        'node_modules',
    ],
    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',
    // The glob patterns Jest uses to detect test files
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
};
