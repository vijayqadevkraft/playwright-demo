const BasePage = require('./BasePage');

class GetStartedPage extends BasePage {
  constructor(page) {
    super(page);
    
    // Page-specific locators for Get Started page
    this.installationLink = page.getByRole('link', { name: 'Installation' });
    this.firstTestLink = page.getByRole('link', { name: 'Writing tests' });
    this.documentationHeading = page.getByRole('heading', { name: 'Installation' });
    this.codeBlock = page.locator('pre').first();
  }

  // Navigate to Get Started page
  async open() {
    await this.navigate('https://playwright.dev/docs/intro');
  }

  // Click on Installation link
  async clickInstallation() {
    await this.installationLink.click();
  }

  // Click on Writing Tests link
  async clickWritingTests() {
    await this.firstTestLink.click();
  }

  // Verify Get Started page loaded
  async verifyPageLoaded() {
    await this.waitForElement(this.documentationHeading);
    const heading = await this.getTextContent(this.documentationHeading);
    return heading.includes('Installation');
  }

  // Check if code block is visible
  async isCodeBlockVisible() {
    return await this.isVisible(this.codeBlock);
  }
}

module.exports = GetStartedPage;
