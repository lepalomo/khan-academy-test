Khan Academy Automated Tests with Playwright
This project automates key test scenarios for the Khan Academy website, focusing on interactions that a teacher and student would perform on the platform. The tests are implemented using Playwright and include functionality such as creating a class, recommending content, removing a user, and accessing course materials.

Project Requirements
The automated tests validate the following key scenarios:

Teacher creating a class with students.
Teacher recommending 15 pieces of content to an existing class.
Teacher removing a user from a specific class.
Student joining a course in a specific subject and viewing a lesson.
Tech Stack
Playwright: A framework for browser automation.
Node.js: Runtime environment for JavaScript.
Kubernetes (optional for pipeline execution): For scaling and containerizing test runs.
GitHub: Version control and hosting for project code.
Getting Started
Prerequisites
Node.js (v14+): Install from Node.js official site.
Playwright: Install with npm install @playwright/test.
GitHub Account: For version control and CI/CD if deploying on GitHub.
Kubernetes: Optional, for running tests in a containerized environment.
Installation
Clone the Repository

bash
Copiar código
git clone <repository-url>
cd <repository-name>
Install Dependencies

bash
Copiar código
npm install
Configure Environment Variables

Create an .env file in the root directory to store test credentials securely. This file is ignored by Git.

The .env file should contain:

plaintext
Copiar código
TEACHER_EMAIL=your_teacher_email@example.com
TEACHER_PASSWORD=your_teacher_password
STUDENT_EMAIL=your_student_email@example.com
STUDENT_PASSWORD=your_student_password
Initialize Playwright

Ensure browsers are set up for testing:
bash
Copiar código
npx playwright install
Test Scenarios
The test files for each scenario are located in the tests folder:

createClass.test.js: Validates the ability of a teacher to create a class with students.
recommendContent.test.js: Checks if a teacher can recommend content to an existing class.
removeUser.test.js: Ensures that a teacher can remove a user from a class.
viewClass.test.js: Verifies that a student can access a course and view a lesson.
Running the Tests
Run All Tests in Headed Mode (for visual tracking)

bash
Copiar código
npx playwright test --headed
Run a Specific Test

bash
Copiar código
npx playwright test tests/createClass.test.js --headed
Debug Mode

Use debug mode to pause at each test step and inspect the page:
bash
Copiar código
PWDEBUG=1 npx playwright test
Optional: Running in Kubernetes
To run these tests in a Kubernetes cluster:

Create Kubernetes Secrets

Store credentials securely as Kubernetes Secrets:
bash
Copiar código
kubectl create secret generic test-credentials \
    --from-literal=TEACHER_EMAIL=your_teacher_email@example.com \
    --from-literal=TEACHER_PASSWORD=your_teacher_password
Run the Pipeline

Configure your CI/CD pipeline to execute tests in a Kubernetes pod, using environment variables from the Kubernetes Secrets.
Additional Features
Trace Viewer: For detailed trace logs and screenshots, enable tracing in playwright.config.js by setting trace: 'on-first-retry'.
Video Recording: To capture video of test runs, set video: 'retain-on-failure' in the config file.
Troubleshooting
Element Not Visible: Ensure elements have fully loaded by using await page.waitForSelector.
Credentials Not Set: Double-check the .env file or Kubernetes Secrets if tests fail to log in.
Contributing
Feel free to submit issues or pull requests if you’d like to contribute. Ensure tests pass locally before submitting changes.

License
This project is licensed under the MIT License.
