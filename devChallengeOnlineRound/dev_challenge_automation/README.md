# UI Tests for www.devchallenge.it

This project utilizes Playwright with TypeScript for UI testing. Playwright offers built-in parallel execution, is quick to set up, and easily supports running in multiple browsers. A .gitlab-ci.yml file is included to facilitate running tests as part of the CI/CD process. (See the attached screenshot of a successful pipeline in the repository root.)
The tests are run in three browsers: Chromium (which includes Chrome), Firefox, and WebKit (the engine used by Safari).

## Step-by-Step Guide

Step 1: Check your  Node.js Version and npm version

Run the following command in your terminal:

```
node -v
npm -v
```

If you see a Node.js version and npm version, you're all set! If not, you can download and install it from  https://nodejs.org/
npm usually comes together with node.js

Note: You need to have Node.js version 18 or higher, however depending on your OS the tests might work  on the older node.js versions as well.


Step 2: Unzip the Archive

Unzip the archive you received and navigate to the directory where the project is located:

```
cd unzipped-project-directory
```

Step 3: Install Playwright

Install the necessary dependencies and the required browsers

```
npm install
npx playwright install
```


Step 4: Test Execution

To run all tests in all browsers in headed mode with 1 worker use the following command:

```
npx playwright test --headed --workers=1 --retries=5
```

All tests can be run in parallel, by skipping the --workers flag

```
npx playwright test --headed --retries=5
```
