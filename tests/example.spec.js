const { test, expect } = require('@playwright/test');

// Test Suite: Example Tests
test.describe('Playwright Demo Tests', () => {
  
  // Test 1: Check if Playwright homepage loads and has correct title
  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Expect the page to have a title containing "Playwright"
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  // Test 2: Check if "Get started" link is visible and clickable
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Click the get started link
    await page.getByRole('link', { name: 'Get started' }).click();
    
    // Expect the URL to contain "intro"
    await expect(page).toHaveURL(/.*intro/);
  });
  
  // Test 3: Basic navigation test
  test('navigation test', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Verify page loaded
    await expect(page).toHaveURL('https://playwright.dev/');
    
    // Check if main heading is visible
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
  });
  
  // Test 4: Search functionality (if available)
  test('check page content', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Verify some content exists on the page
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(0);
  });
});
