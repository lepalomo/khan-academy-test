// utils/auth.js
require('dotenv').config();
// Access credentials

const teacherEmail = process.env.TEACHER_EMAIL;
const teacherPassword = process.env.TEACHER_PASSWORD;

const studentEmail = process.env.STUDENT_EMAIL;
const studentPassword = process.env.STUDENT_PASSWORD;

async function loginAsTeacher(page) {
        // navigate to khan academy
        await page.goto('https://pt.khanacademy.org');
    // Check if the accept cookies modal appears
    if (await page.isVisible('button[id="onetrust-accept-btn-handler"]')) {
        // Click on the accept cookies button to close the modal
        await page.click('button[id="onetrust-accept-btn-handler"]');
    }

    // Wait for the element to be visible and ensure it is interactable
    await page.waitForSelector('text="Entrar"', { state: 'visible' });
    // Use JavaScript to click if the standard click fails
    const loginButton = await page.$('text="Entrar"');
    if (loginButton && await loginButton.isEnabled()) {
        await loginButton.click();
    } else {
        // Fallback to JavaScript click if the button is not enabled
        await page.evaluate((button) => button.click(), loginButton);
    }
    // Continue with the login process
    await page.fill('input[data-testid="identifier-field"]', teacherEmail);
    await page.fill('input[data-testid="password-field"]', teacherPassword);
    await page.click('button[data-testid="log-in-submit-button"]');
}

async function loginAsStudent(page) {
        // navigate to khan academy
        await page.goto('https://pt.khanacademy.org');
    // Check if the accept cookies modal appears
    if (await page.isVisible('button[id="onetrust-accept-btn-handler"]')) {
        // Click on the accept cookies button to close the modal
        await page.click('button[id="onetrust-accept-btn-handler"]');
    }

    // Check if the login button is visible and click on it
    if (await page.isVisible('a[id="login-or-signup"]')) {
        await page.click('a[id="login-or-signup"]');
    } else {
        // If the login button is not visible, check if the profile button exists
        if (await page.isVisible('button[data-testid="header-profile-button"]')) {
            // If the profile button exists, continue the execution
            return;
        }
    }
    // Locate the login button and click on it
    await page.click('a[id="login-or-signup"]');

    // Wait for the login form to load and fill in credentials
    await page.fill('input[data-testid="identifier-field"]', studentEmail);
    await page.fill('input[data-testid="password-field"]', studentPassword);
    await page.click('button[data-testid="log-in-submit-button"]');
}

module.exports = { loginAsTeacher, loginAsStudent };