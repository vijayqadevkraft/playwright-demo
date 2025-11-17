# playwright-demo

A simple Playwright test automation project demonstrating end-to-end testing capabilities.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Example Tests](#example-tests)
- [Best Practices](#best-practices)
- [Resources](#resources)

## 🎯 Overview

This project is a starter template for automated testing using Playwright. It includes:

- ✅ Pre-configured Playwright setup
- ✅ Example test cases
- ✅ Multi-browser support (Chromium, Firefox, WebKit)
- ✅ HTML test reports
- ✅ Screenshot on failure
- ✅ Trace recording on retry

## 📦 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for cloning)

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/vijayqadevkraft/playwright-demo.git
cd playwright-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install browsers

```bash
npx playwright install
```

This will download Chromium, Firefox, and WebKit browsers.

## 📁 Project Structure

```
playwright-demo/
├── tests/
│   └── example.spec.js      # Example test suite
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── .gitignore               # Git ignore file
└── README.md                # This file
```

## ▶️ Running Tests

### Run all tests

```bash
npm test
```

### Run tests in headed mode (see browser)

```bash
npm run test:headed
```

### Run tests in debug mode

```bash
npm run test:debug
```

### View test report

```bash
npm run report
```

### Run specific test file

```bash
npx playwright test tests/example.spec.js
```

### Run tests in specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## ⚙️ Configuration

The `playwright.config.js` file contains all configuration:

- **testDir**: Location of test files (`./tests`)
- **timeout**: Maximum test execution time (30 seconds)
- **retries**: Number of retries on failure (2 on CI, 0 locally)
- **workers**: Parallel execution workers
- **reporter**: HTML reporter for test results
- **projects**: Browser configurations (Chromium, Firefox, WebKit)

## 📝 Example Tests

The project includes example tests in `tests/example.spec.js`:

1. **Title Check Test** - Verifies page title
2. **Navigation Test** - Tests link navigation
3. **Element Visibility Test** - Checks if elements are visible
4. **Content Verification Test** - Validates page content

## 🎓 Best Practices

1. **Use Page Object Model** - Separate test logic from page interactions
2. **Write Independent Tests** - Each test should run independently
3. **Use Descriptive Names** - Test names should clearly describe what they test
4. **Add Comments** - Document complex test logic
5. **Handle Waits Properly** - Use Playwright's auto-waiting features
6. **Screenshot on Failure** - Already configured in this project

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Test Selectors](https://playwright.dev/docs/selectors)
- [Community Discord](https://discord.com/invite/playwright-807756831384403968)

## 🤝 Contributing

Feel free to fork this project and submit pull requests with improvements!

## 📄 License

ISC

## 👤 Author

**vijayqadevkraft**

---

**Happy Testing! 🚀**
