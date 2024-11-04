<h1>Khan Academy Automated Tests with Playwright</h1>

<p>This project automates key test scenarios for the Khan Academy website, focusing on interactions that a teacher and student would perform on the platform. The tests are implemented using <a href="https://playwright.dev/">Playwright</a> and include functionality such as creating a class, recommending content, removing a user, and accessing course materials.</p>

<h2>Project Requirements</h2>
<p>The automated tests validate the following key scenarios:</p>
<ul>
    <li><strong>Teacher creating a class with students.</strong></li>
    <li><strong>Teacher recommending 15 pieces of content to an existing class.</strong></li>
    <li><strong>Teacher removing a user from a specific class.</strong></li>
    <li><strong>Student joining a course in a specific subject and viewing a lesson.</strong></li>
</ul>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Playwright</strong>: A framework for browser automation.</li>
    <li><strong>Node.js</strong>: Runtime environment for JavaScript.</li>
    <li><strong>Kubernetes</strong> (optional for pipeline execution): For scaling and containerizing test runs.</li>
    <li><strong>GitHub</strong>: Version control and hosting for project code.</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ol>
    <li>Node.js (v14+): Install from <a href="https://nodejs.org/">Node.js official site</a>.</li>
    <li><strong>Playwright</strong>: Install with <code>npm install @playwright/test</code>.</li>
    <li><strong>GitHub Account</strong>: For version control and CI/CD if deploying on GitHub.</li>
    <li><strong>Kubernetes</strong>: Optional, for running tests in a containerized environment.</li>
</ol>

<h3>Installation</h3>

<ol>
    <li><strong>Clone the Repository
        <pre>git clone &lt;repository-url&gt;cd &lt;repository-name&gt;</pre>
    </li>
    <li>Install Dependencies
        <pre>npm install</pre>
    </li>
    <li style="display:block"><strong>Configure Environment Variables</strong>
        <p>Create an <code>.env</code> file in the root directory to store test credentials securely. This file is ignored by Git.</p>
        <pre>TEACHER_EMAIL=your_teacher_email@example.com
        TEACHER_PASSWORD=your_teacher_password
        STUDENT_EMAIL=your_student_email@example.com
        STUDENT_PASSWORD=your_student_password></pre>
    </li>
    <li><strong>Initialize Playwright</strong>
        <p>Ensure browsers are set up for testing:</p>
        <pre>npx playwright install</pre>
    </li>
</ol>

<h2>Test Scenarios</h2>
<p>The test files for each scenario are located in the <code>tests</code> folder:</p>
<ul>
    <li><code>createClass.test.js</code>: Validates the ability of a teacher to create a class with students.</li>
    <li><code>recommendContent.test.js</code>: Checks if a teacher can recommend content to an existing class.</li>
    <li><code>removeUser.test.js</code>: Ensures that a teacher can remove a user from a class.</li>
    <li><code>viewClass.test.js</code>: Verifies that a student can access a course and view a lesson.</li>
</ul>

<h2>Running the Tests</h2>

<ol>
    <li><strong>Run All Tests in Headed Mode</strong> (for visual tracking)
        <pre>npx playwright test --headed</pre>
    </li>
    <li><strong>Run a Specific Test</strong>
        <pre>npx playwright test tests/createClass.test.js --headed</pre>
    </li>
    <li><strong>Debug Mode</strong>
        <p>Use debug mode to pause at each test step and inspect the page:</p>
        <pre>PWDEBUG=1 npx playwright test</pre>
    </li>
</ol>

<h3>Optional: Running in Kubernetes</h3>
<p>To run these tests in a Kubernetes cluster:</p>

<ol>
    <li><strong>Create Kubernetes Secrets</strong>
        <p>Store credentials securely as Kubernetes Secrets:</p>
        <pre>kubectl create secret generic test-credentials \
    --from-literal=TEACHER_EMAIL=your_teacher_email@example.com \
    --from-literal=TEACHER_PASSWORD=your_teacher_password</pre>
    </li>
    <li><strong>Run the Pipeline</strong>
        <p>Configure your CI/CD pipeline to execute tests in a Kubernetes pod, using environment variables from the Kubernetes Secrets.</p>
    </li>
</ol>

<h2>Additional Features</h2>

<ul>
    <li><strong>Trace Viewer</strong>: For detailed trace logs and screenshots, enable tracing in <code>playwright.config.js</code> by setting <code>trace: 'on-first-retry'</code>.</li>
    <li><strong>Video Recording</strong>: To capture video of test runs, set <code>video: 'retain-on-failure'</code> in the config file.</li>
</ul>

<h2>Troubleshooting</h2>

<ul>
    <li><strong>Element Not Visible</strong>: Ensure elements have fully loaded by using <code>await page.waitForSelector</code>.</li>
    <li><strong>Credentials Not Set</strong>: Double-check the <code>.env</code> file or Kubernetes Secrets if tests fail to log in.</li>
</ul>

<h2>Contributing</h2>
<p>Feel free to submit issues or pull requests if you’d like to contribute. Ensure tests pass locally before submitting changes.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>
