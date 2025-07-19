/* eslint-disable no-console */

// Test setup file for Vitest
// This file runs before each test

// Mock console methods to reduce noise in tests
const originalConsole = { ...console };

beforeEach(() => {
  // Suppress console.log and console.warn in tests
  console.log = vi.fn();
  console.warn = vi.fn();
});

afterEach(() => {
  // Restore original console methods
  console.log = originalConsole.log;
  console.warn = originalConsole.warn;
});

// Global test utilities
global.testUtils = {
  // Helper to create a mock DOM element
  createMockElement: (tagName = 'div', attributes = {}) => {
    const element = document.createElement(tagName);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  },

  // Helper to wait for async operations
  waitFor: (ms = 100) => new Promise(resolve => setTimeout(resolve, ms))
};
