// BasePage.js - Base class with common methods for all page objects

class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Navigation
  async navigate(url) {
    await this.page.goto(url);
  }

  // Wait for element
  async waitForElement(selector, options = {}) {
    await this.page.waitForSelector(selector, options);
  }

  // Click element
  async click(selector) {
    await this.page.click(selector);
  }

  // Get text content
  async getTextContent(selector) {
    return await this.page.textContent(selector);
  }

  // Check if element is visible
  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  // Get page title
  async getTitle() {
    return await this.page.title();
  }

  // Wait for navigation
  async waitForNavigation(options = {}) {
    await this.page.waitForLoadState('networkidle', options);
  }

  // Take screenshot
  async takeScreenshot(path) {
    await this.page.screenshot({ path, fullPage: true });
  }
}

module.exports = BasePage;
