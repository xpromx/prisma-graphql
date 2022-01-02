module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  preset: "ts-jest",
};
