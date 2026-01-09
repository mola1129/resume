import { test, expect } from "@playwright/test";

/**
 * Visual Regression Tests
 *
 * These tests capture screenshots and compare them against baseline images
 * to detect unintended visual changes across different viewports and themes.
 */

test.describe("Homepage Visual Regression", () => {
  test("Light mode - full page", async ({ page }) => {
    await page.goto("/");
    await page.emulateMedia({ colorScheme: "light" });

    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Take full page screenshot
    await expect(page).toHaveScreenshot("homepage-light.png", {
      fullPage: true,
      animations: "disabled",
    });
  });

  test("Dark mode - full page", async ({ page }) => {
    await page.goto("/");
    await page.emulateMedia({ colorScheme: "dark" });

    // Wait for page to be fully loaded
    await page.waitForLoadState("networkidle");

    // Take full page screenshot
    await expect(page).toHaveScreenshot("homepage-dark.png", {
      fullPage: true,
      animations: "disabled",
    });
  });
});
