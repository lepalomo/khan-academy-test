const { test, expect } = require('@playwright/test');

require('dotenv').config();

// Import the login function from auth.js
const loginAsTeacher = require('./utils/auth');

test('Teacher should be able to create assignments', async ({ page }) => {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    await browser.newContext({ slowMo: 1000 });


    // Log in as teacher
    await loginAsTeacher.loginAsTeacher(page);

    // Click on the "a" element with data-testid 'Turma do teste playwright'
    await page.click('a[data-testid="Turma do teste playwright"]');

    // When the page opens, click on the "a" element with data-testid 'nav-create-assignments'
    await page.click('button[data-testid="assignments-subsection"]');
    await page.click('a[data-testid="nav-create-assignments"]');

    
    // Click on the item with class _1k95g4y8
    await page.click('._1k95g4y8');


    // Wait for checkboxes to be loaded
    await page.waitForSelector('._1k95g4y8 input[type="checkbox"]');


    // Click on the first checkbox in the list
    await page.click('input[data-testid="row-checkbox-0"]');


    // Click on the multi-assign button
    await page.click('button[data-testid="multi-assign-btn"]');


});
