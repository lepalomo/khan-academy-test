const { test, expect } = require('@playwright/test');

require('dotenv').config();

// Import the login function from auth.js
const loginAsTeacher = require('./utils/auth');

test('Teacher should be able to create a class with students', async ({ page }) => {
    // Use the login function instead of manual login steps
    await loginAsTeacher.loginAsTeacher(page);

    await Promise.any([
        page.waitForSelector('a[data-testid="add-new-class"]', { timeout: 5000 }),
        page.waitForSelector('text=Criar uma classe', { timeout: 5000 })
    ]);
    
    // After ensuring one of them is visible, proceed with the checks
    if (await page.isVisible('a[data-testid="add-new-class"]')) {
        await page.click('a[data-testid="add-new-class"]');
    } else if (await page.isVisible('text=Criar uma classe')) {
        await page.click('text=Criar uma classe');
    } else {
        throw new Error('Neither add-new-class button nor Criar uma classe text is visible.');
    }


    //Step 4: fill in classe details
    const className = `Turma do teste playwright ${Date.now()}`;
    await page.fill('input[data-testid="class-name-input-field"]', className);
    await page.click('button[data-testid="go-next-button"]');
    await page.click('button[data-testid="class-creator-skip-button"]');
    await page.click('button[data-testid="class-creator-skip-button"]');

    await page.click('button[data-testid="country-dropdown"]');
    await page.fill('input[placeholder="Filter"]', 'Bra');

    await page.click('text=Brasil');
    page.click('button[data-testid="brazil-states-dropdown"]');
    page.click('text=Paraíba');

    await page.click('button[data-testid="brazil-city-dropdown"]');
    await page.fill('input[placeholder="Filter"]', 'João');
    await page.click('span:text("JOÃO PESSOA")');

    await page.click('button[data-testid="class-creator-skip-button"]');

})