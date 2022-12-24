module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    testEnvironment: 'node',
    transform: {
        '.+\\.ts$': 'ts-jest'
    },
}

// module.exports = {
//     roots: ['<rootDir>/'],
//     collectCoverageFrom: [
//         '<rootDir>/src/**/*.ts',
//         '!<rootDir>/src/main/**'
//     ],
//     coverageDirectory: 'coverage',
//     coverageProvider: 'babel',
//     testEnvironment: 'node',
// }