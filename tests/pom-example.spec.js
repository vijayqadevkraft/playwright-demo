const { test, expect } = require('@playwright/test');
const PlaywrightHomePage = require('../pages/PlaywrightHomePage');
const GetStartedPage = require('../pages/GetStartedPage');

test.describe('Page Object Model Examples', () => {
  
  test('should navigate to Playwright homepage and verify title', async ({ page }) => {
    // Initialize page object
    const homePage = new PlaywrightHomePage(page);
    
    // Open homepage
    await homePage.open();
    
    // Verify page loaded
    const isLoaded = await homePage.verifyHomepageLoaded();
    expect(isLoaded).toBeTruthy();
    
    // Verify title contains Playwright
    const title = await homePage.getTitle();
    expect(title).toContain('Playwright');
  });

  test('should navigate from homepage to Get Started page', async ({ page }) => {
    // Initialize page objects
    const homePage = new PlaywrightHomePage(page);
    const getStartedPage = new GetStartedPage(page);
    
    // Open homepage and click Get Started
    await homePage.open();
    await homePage.clickGetStarted();
    
    // Verify Get Started page loaded
    await getStartedPage.verifyPageLoaded();
    
    // Verify code block is visible
    const codeBlockVisible = await getStartedPage.isCodeBlockVisible();
    expect(codeBlockVisible).toBeTruthy();
  });

  test('should verify Get Started page elements are visible', async ({ page }) => {
    // Initialize page object
    const getStartedPage = new GetStartedPage(page);
    
    // Open Get Started page directly
    await getStartedPage.open();
    
    // Verify page loaded
    const isLoaded = await getStartedPage.verifyPageLoaded();
    expect(isLoaded).toBeTruthy();
    
    // Verify code block is visible
    const codeBlockVisible = await getStartedPage.isCodeBlockVisible();
    expect(codeBlockVisible).toBeTruthy();
  });

  test('should verify homepage Get Started button is visible', async ({ page }) => {
    // Initialize page object
    const homePage = new PlaywrightHomePage(page);
    
    // Open homepage
    await homePage.open();
    
    // Check if Get Started button is visible
    const isVisible = await homePage.isGetStartedVisible();
    expect(isVisible).toBeTruthy();
  });
});
