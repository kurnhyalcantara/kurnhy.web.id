import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Menggunakan ts-jest untuk mendukung TypeScript
  testEnvironment: 'node', // Lingkungan pengujian, cocok untuk Node.js
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Alias untuk import menggunakan '@/'
  },
  rootDir: './', // Root direktori proyek
  testMatch: ['**/tests/**/*.test.ts'], // Pola untuk menemukan file pengujian
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transformasi untuk file .ts dan .tsx
  },
  collectCoverage: true, // Mengaktifkan laporan cakupan kode
  // collectCoverageFrom: [
  //   '**/*.{ts,tsx}', // File yang diukur cakupannya (semua .ts/.tsx)
  //   '!**/node_modules/**', // Mengecualikan folder node_modules
  //   '!**/tests/**', // Mengecualikan folder tests
  //   '!**/*.d.ts', // Mengecualikan file definisi
  //   '!jest.config.ts', // Mengecualikan file konfigurasi Jest
  // ],
  coverageReporters: ['text', 'lcov'], // Format laporan cakupan
};

export default config;
