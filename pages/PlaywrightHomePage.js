// PlaywrightHomePage.js - Page Object for Playwright homepage

const BasePage = require('./BasePage');

class PlaywrightHomePage extends BasePage {
  constructor(page) {
    super(page);
    this.url = 'https://playwright.dev/';
    
    // Locators
    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.docsSidebarItem = page.getByRole('button', { name: 'Docs sidebar' });
    this.searchButton = page.getByLabel('Search');
  }

  // Navigate to Playwright homepage
  async open() {
    await this.navigate(this.url);
  }

  // Click Get Started link
  async clickGetStarted() {
    await this.getStartedLink.click();
  }

  // Verify homepage loaded
  async verifyHomepageLoaded() {
    await this.page.waitForLoadState('networkidle');
    const title = await this.getTitle();
    return title.includes('Playwright');
  }

  // Check if Get Started link is visible
  async isGetStartedVisible() {
    return await this.getStartedLink.isVisible();
  }
}

module.exports = PlaywrightHomePage;
