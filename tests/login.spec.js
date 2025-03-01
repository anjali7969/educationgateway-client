// import { expect, test } from '@playwright/test';

// test.describe('Login Component Tests', () => {

//     test.beforeEach(async ({ page }) => {
//         await page.goto('http://localhost:5173/login', { waitUntil: 'domcontentloaded' });
//     });

//     test('should render login page correctly', async ({ page }) => {
//         await expect(page.locator('h1:text("Welcome Back!")')).toBeVisible();
//         await expect(page.locator('p:text("Log in to continue your learning journey with us.")')).toBeVisible();
//         await expect(page.locator('input[placeholder="Enter your email"]')).toBeVisible();
//         await expect(page.locator('input[placeholder="Enter your password"]')).toBeVisible();
//         await expect(page.locator('button:text("Log In")')).toBeVisible();
//         await expect(page.locator('a:text("Forgot Password?")')).toBeVisible();
//         await expect(page.locator('button:text("Sign Up")')).toBeVisible();
//     });

//     test('should toggle password visibility when clicking the eye button', async ({ page }) => {
//         const passwordInput = page.locator('input[placeholder="Enter your password"]');
//         const eyeButton = page.locator('button:has(svg)'); // Locate button with eye icon

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

//         // Wait for localStorage updates and redirection
//         await page.waitForTimeout(3000);

//         const userData = await page.evaluate(() => JSON.parse(localStorage.getItem('user')));
//         expect(userData).not.toBeNull();

//         if (userData.role === "Admin") {
//             await expect(page).toHaveURL('http://localhost:5173/admin');
//         } else {
//             await expect(page).toHaveURL('http://localhost:5173/student');
//         }
//     });

//     test('should navigate to signup page when clicking "Sign Up"', async ({ page }) => {
//         await page.click('button:text("Sign Up")');
//         await expect(page).toHaveURL('http://localhost:5173/signup');
//     });

//     test('should navigate to forgot password page when clicking "Forgot Password?"', async ({ page }) => {
//         await page.click('a:text("Forgot Password?")');
//         await expect(page).toHaveURL('http://localhost:5173/forgot');
//     });
// });
