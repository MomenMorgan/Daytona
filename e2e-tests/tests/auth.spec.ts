import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5173"
const testEmail = `test_register_${Math.floor(Math.random() * 9000 + 1000)}@test.com`
test('should allow the user to sign in', async ({ page }) => {

  await page.goto(UI_URL)

  await page.getByRole("link", { name: "Sign In" }).click();

  await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();

  await page.locator("[name=email]").fill("mominmorgan10@gmail.com")

  await page.locator("[name=password]").fill("zmantl9")

  await page.getByRole("button", { name: "Login" }).click()

  await expect(page.getByText("Sign in Successful!")).toBeVisible()
  await expect(page.getByRole("link", { name: "Bookings" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Hotels" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible()
});

test("should allow the user to register", async ({ page }) => {
  await page.goto(UI_URL)
  await page.getByRole("link", { name: "Sign In" }).click()
  await page.getByRole("link", { name: "Create an account" }).click()
  await expect(page.getByRole("heading", { name: "Create an account" })).toBeVisible()
  await page.locator("[name=firstName]").fill("test_firstName")
  await page.locator("[name=lastName]").fill("test_lastName")
  await page.locator("[name=email]").fill(testEmail)
  await page.locator("[name=password]").fill("zmantl9")
  await page.locator("[name=confirmPassword]").fill("zmantl9")
  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page.getByText("Registration Success")).toBeVisible()
  await expect(page.getByRole("link", { name: "Bookings" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Hotels" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible()

})