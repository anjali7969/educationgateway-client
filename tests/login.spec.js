// import { expect, test } from '@playwright/test';

// test.describe('Login Modal Tests', () => {
//     test.beforeEach(async ({ page }) => {
//         // ✅ Load homepage and ensure network requests are completed
//         await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

//         // ✅ Click the correct "Sign In" button inside the navbar
//         const navbarSignInButton = page.locator('button:text("Sign In")').first();

//         // ✅ Ensure the button is visible and clickable before interacting
//         await navbarSignInButton.waitFor({ state: 'visible', timeout: 10000 });
//         await navbarSignInButton.click();

//         // ✅ Wait for the login modal to fully appear
//         await page.waitForSelector('h1:text("Welcome Back!")', { timeout: 10000 });
//         await expect(page.locator('h1:text("Welcome Back!")')).toBeVisible();
//     });

//     test('should render login modal correctly', async ({ page }) => {
//         await expect(page.locator('input[placeholder="Enter your email"]')).toBeVisible();
//         await expect(page.locator('input[placeholder="Enter your password"]')).toBeVisible();
//         await expect(page.locator('button:text("Log In")')).toBeVisible();
//         await expect(page.locator('a:text("Forgot Password?")')).toBeVisible();
//     });

//     test('should toggle password visibility when clicking the eye button', async ({ page }) => {
//         const passwordInput = page.locator('input[placeholder="Enter your password"]');
//         const eyeButton = page.locator('button:has(svg)'); // Locate the eye icon button

//         await passwordInput.fill('testpassword123');
//         await expect(passwordInput).toHaveAttribute('type', 'password');

//         await eyeButton.click();
//         await expect(passwordInput).toHaveAttribute('type', 'text');

//         await eyeButton.click();
//         await expect(passwordInput).toHaveAttribute('type', 'password');
//     });

//     test('should show error for invalid login credentials', async ({ page }) => {
//         await page.fill('input[placeholder="Enter your email"]', 'wrongemail@gmail.com');
//         await page.fill('input[placeholder="Enter your password"]', 'wrongpassword');
//         await page.click('button:text("Log In")');

//         await expect(page.locator('text=Something went wrong. Try again.')).toBeVisible({ timeout: 5000 });
//     });

//     test('should successfully log in and redirect based on user role', async ({ page }) => {
//         await page.fill('input[placeholder="Enter your email"]', 'testuser@gmail.com');
//         await page.fill('input[placeholder="Enter your password"]', 'Test@123');

//         await page.click('button:text("Log In")');

//         // ✅ Wait for redirection
//         await page.waitForTimeout(5000);

//         const userData = await page.evaluate(() => JSON.parse(localStorage.getItem('user')));
//         expect(userData).not.toBeNull();

//         if (userData.role === "Admin") {
//             await expect(page).toHaveURL('http://localhost:5173/admin');
//         } else {
//             await expect(page).toHaveURL('http://localhost:5173/student');
//         }
//     });

//     test('should navigate to signup modal when clicking "Sign Up"', async ({ page }) => {
//         await page.click('button:text("Sign Up")');
//         await page.waitForSelector('h1:text("Create an Account")', { timeout: 10000 });
//         await expect(page.locator('h1:text("Create an Account")')).toBeVisible();
//     });

//     test('should navigate to forgot password page when clicking "Forgot Password?"', async ({ page }) => {
//         await page.click('a:text("Forgot Password?")');
//         await expect(page).toHaveURL('http://localhost:5173/forgot');
//     });

//     test('should persist login state across reloads', async ({ page }) => {
//         await page.fill('input[placeholder="Enter your email"]', 'testuser@gmail.com');
//         await page.fill('input[placeholder="Enter your password"]', 'Test@123');
//         await page.click('button:text("Log In")');

//         await page.waitForTimeout(5000);
//         await page.reload();

//         const userData = await page.evaluate(() => JSON.parse(localStorage.getItem('user')));
//         expect(userData).not.toBeNull();
//         await expect(page).toHaveURL('http://localhost:5173/student');
//     });

//     test('should log out and redirect to home page', async ({ page }) => {
//         await page.fill('input[placeholder="Enter your email"]', 'testuser@gmail.com');
//         await page.fill('input[placeholder="Enter your password"]', 'Test@123');
//         await page.click('button:text("Log In")');

//         await page.waitForTimeout(5000);

//         await page.click('button:text("Logout")');

//         await expect(page).toHaveURL('http://localhost:5173/');
//         await expect(page.locator('button:text("Sign In")')).toBeVisible();
//     });
// });



import { expect, test } from '@playwright/test';

test.describe('Authentication Modal Tests', () => {
    test.beforeEach(async ({ page }) => {
        // ✅ Navigate to homepage
        await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

        // ✅ Click "Sign In" button from the Navbar
        const signInButton = page.locator('button:text("Sign In")').first();
        await signInButton.waitFor({ state: 'visible', timeout: 10000 });
        await signInButton.click();

        // ✅ Ensure the login modal appears
        await page.waitForSelector('h1:text("Welcome Back!")', { timeout: 10000 });
    });

    test('should render login modal correctly', async ({ page }) => {
        await expect(page.locator('input[placeholder="Enter your email"]')).toBeVisible();
        await expect(page.locator('input[placeholder="Enter your password"]')).toBeVisible();
        await expect(page.locator('button:text("Log In")')).toBeVisible();
        await expect(page.locator('a:text("Forgot Password?")')).toBeVisible();
    });

    test('should switch to signup modal when clicking "Sign Up"', async ({ page }) => {
        // ✅ Click "Sign Up" inside login modal
        await page.click('button:text("Sign Up")');

        // ✅ Wait for Signup modal to be visible
        await page.waitForSelector('h1:text("Create an Account")', { timeout: 10000 });
        await expect(page.locator('h1:text("Create an Account")')).toBeVisible();
    });

    test('should complete signup process successfully', async ({ page }) => {
        // ✅ Switch to Signup modal
        await page.click('button:text("Sign Up")');
        await page.waitForSelector('h1:text("Create an Account")', { timeout: 10000 });

        // ✅ Fill out signup form
        await page.fill('input[placeholder="Enter your full name"]', 'John Doe');
        await page.fill('input[placeholder="Enter your email"]', 'johndoe@gmail.com');
        await page.fill('input[placeholder="Enter your phone number"]', '9876543210');
        await page.fill('input[placeholder="Enter your password"]', 'Test@123');

        // ✅ Click Signup
        await page.click('button:text("Sign Up")');

        // ✅ Ensure signup was successful and modal closed
        await page.waitForSelector('h1:text("Create an Account")', { state: 'hidden', timeout: 10000 });
    });

    test('should login successfully and redirect to student dashboard', async ({ page }) => {
        await page.fill('input[placeholder="Enter your email"]', 'testuser@gmail.com');
        await page.fill('input[placeholder="Enter your password"]', 'Test@123');
        await page.click('button:text("Log In")');

        // ✅ Ensure modal closes
        await page.waitForSelector('h1:text("Welcome Back!")', { state: 'hidden', timeout: 10000 });

        // ✅ Redirects to Student Dashboard
        await page.waitForTimeout(5000);
        await expect(page).toHaveURL('http://localhost:5173/student');
    });

    test('should log out and redirect to home page', async ({ page }) => {
        // ✅ Login first
        await page.fill('input[placeholder="Enter your email"]', 'testuser@gmail.com');
        await page.fill('input[placeholder="Enter your password"]', 'Test@123');
        await page.click('button:text("Log In")');

        await page.waitForTimeout(5000);

        // ✅ Click Logout button in Navbar
        await page.click('button:text("Logout")');

        // ✅ Ensure redirection to home page
        await expect(page).toHaveURL('http://localhost:5173/');
        await expect(page.locator('button:text("Sign In")')).toBeVisible();
    });

    test('should close login modal when clicking close button', async ({ page }) => {
        const closeButton = page.locator('button:text("×")'); // Close button in the modal
        await closeButton.click();
        await expect(page.locator('h1:text("Welcome Back!")')).toBeHidden();
    });
});
