// utils/auth.js
require('dotenv').config();
// Access credentials

const teacherEmail = process.env.TEACHER_EMAIL;
const teacherPassword = process.env.TEACHER_PASSWORD;

const studentEmail = process.env.STUDENT_EMAIL;
const studentPassword = process.env.STUDENT_PASSWORD;

async function loginAsTeacher(page) {
    // Locate the login button and click on it
    await page.click('a[id="login-or-signup"]');

    // Wait for the login form to load and fill in credentials
    await page.fill('input[data-testid="identifier-field"]', teacherEmail);
    await page.fill('input[data-testid="password-field"]', teacherPassword);
    await page.click('button[data-testid="log-in-submit-button"]');
}

async function loginAsStudent(page) {
    // Locate the login button and click on it
    await page.click('a[id="login-or-signup"]');

    // Wait for the login form to load and fill in credentials
    await page.fill('input[data-testid="identifier-field"]', studentEmail);
    await page.fill('input[data-testid="password-field"]', studentPassword);
    await page.click('button[data-testid="log-in-submit-button"]');
}

module.exports = { loginAsTeacher, loginAsStudent };